import emailjs from '@emailjs/browser';

export class EmailManager {
  constructor({ serviceId, templateId, publicKey }) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }

  formatOrderToEmail(orderData) {
    const {
      customer_name,
      customer_email,
      customer_phone,
      shipping_address,
      total_amount,
      products
    } = orderData;

    // פריסת הכתובת
    let formattedAddress = '';
    if (shipping_address && typeof shipping_address === 'object') {
      const {
        street = '',
        city = '',
        state = '',
        zip_code = '',
        country = ''
      } = shipping_address;
      
      const addressParts = [street, city, state, zip_code, country].filter(Boolean);

      formattedAddress = addressParts.join(', ');
    } else {
      formattedAddress = String(shipping_address);
  }

  // עיבוד רשימת המוצרים
  const productLines = products.map((product, index) => {
    return `${index + 1}. ${product.product_name} (מזהה: ${product.product_id})  
       כמות: ${product.quantity}, מחיר ליחידה: ₪${product.price.toFixed(2)}  
       סה"כ: ₪${(product.price * product.quantity).toFixed(2)}`;
  }).join('\n\n');

    // תבנית כללית
    return `
  🚚 הזמנה חדשה התקבלה!

  🧾 פרטי לקוח:
  שם: ${customer_name}
  אימייל: ${customer_email}
  טלפון: ${customer_phone}
  כתובת למשלוח: ${formattedAddress}

  🛒 מוצרים:
  ${productLines}

  💳 סה"כ לתשלום: ₪${total_amount.toFixed(2)}

  📅 תאריך: ${new Date().toLocaleString('he-IL')}
  `.trim();
  }


  async sendOrder(orderData) {
    const message = this.formatOrderToEmail(orderData);
    try {
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        {
          message,
          to_name: 'Admin',
          from_name: orderData.customer_name
        },
        this.publicKey
      );
      console.log('ההזמנה נשלחה בהצלחה:', result.status);
      return true;
    } catch (error) {
      console.error('שגיאה בשליחת ההזמנה:', error);
      return false;
    }
  }
}
