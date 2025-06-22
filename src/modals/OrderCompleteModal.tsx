type Props = {
    onCloseCompleteModal: () => void;
};
const OrderCompleteModal = ({ onCloseCompleteModal }: Props) => {
    return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-white mb-4">ההזמנה בוצעה!</h2>
        <p className="text-green-100 mb-6">
          תודה רבה! ההזמנה שלך נקלטה בהצלחה.
          <br />
          נצור איתך קשר בקרוב לאישור המשלוח.
        </p>
        <div className="bg-black bg-opacity-30 rounded-xl p-4 mb-6">
          <div className="text-white font-bold mb-2">מספר הזמנה:</div>
          <div className="text-yellow-400 font-mono text-lg">
            #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </div>
        </div>
        <button           
        onClick={onCloseCompleteModal}
        className="w-full py-3 bg-white text-green-700 font-bold rounded-xl hover:scale-105 transform transition-all duration-300"
        >
          חזרה לאתר
        </button>
      </div>
    </div>
  );
}

export default OrderCompleteModal