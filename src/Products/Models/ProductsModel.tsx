import futivolley_net from '../../assets/productsImages/futivolley-net.png'
import goal_target_net from '../../assets/productsImages/goal-target.png'
import resistance_sprint from '../../assets/productsImages/resistance-sprint.png'
import foam_roller from '../../assets/productsImages/foam-roller.png'
import massage_gun from '../../assets/productsImages/massage-gun.png'
import electronic_ball_pump from '../../assets/productsImages/electronic-ball-pump.png'
import portable_goal from '../../assets/productsImages/portable-goal.png'


export const products: Product[] = [
    {
      id: 1,
      name: 'רשת פוצ׳יבולי גדולה ניידת',
      price: 197,
      image: futivolley_net,
      description: 'ערכת פוצ׳יבולי ניידת למשחק בכל מקום',
      features: ['ניידת במיוחד – ניתנת לנשיאה לכל מקום', 'מתאימה לים, גינה ופארק', 'כיף חברתי מובטח – לכל גיל ורמה'],
      isTop: true
    },
    {
      id: 2,
      name: 'רשת דיוק-טארגט',
      price: 19,
      image: goal_target_net,
      description: 'רשת מטרה ייחודית מושלמת לשיפור הדיוק בבעיטות',
      features: [
        'מתחברת בקלות לכל שער',
        'מיועדת לשיפור דיוק הבעיטה והקואורדינציה',
        'מתאימה לאימון יחידני או תחרויות עם חברים'
      ],
      isTop: true
    },
    {
      id: 3,
      name: 'כבל התנגדות ספרינט',
      price: 19,
      image: resistance_sprint,
      description: 'כבל אלסטי איכותי לשיפור מהירות וכוח מתפרץ',
      features: [
        'מתחבר לגוף ונמתח בהתנגדות משתנה',
        'אידיאלי לשיפור ספרינט, תאוצה ויציאה מהמקום',
      ],
      isTop: false
    },
    {
      id: 4,
      name: 'גליל עיסוי פרימיום',
      price: 19,
      image: foam_roller,
      description: 'שחרור עמוק ועיצוב מושלם – לפני ואחרי אימון.',
      features: [
        'עיצוב צבעוני ומודרני',
        'שחרור נקודתי ועוצמתי של שרירים תפוסים ומתוחים',
        'קל לנשיאה – מתאים לבית, חדר כושר או שטח'
      ],
      isTop: false
    },
    {
      id: 5,
      name: 'אקדח עיסוי אולטרה',
      price: 19,
      image: massage_gun,
      description: 'שחרור שרירים עמוק ועוצמתי בכל זמן ובכל מקום',
      features: [
        'עוצמת רטט משתנה – התאמה מושלמת לכל אזור בגוף',
        'עיצוב ארגונומי ונייד – לשימוש קל ונוח',
        'מנוע שקט וחזק – אידיאלי להתאוששות אחרי אימון'
      ],
      isTop: true
    },
    {
      id: 6,
      name: 'משאבת כדורים דיגיטלית',
      price: 19,
      image: electronic_ball_pump,
      description: 'ניפוח מדויק ומהיר בלחיצת כפתור – בלי להתאמץ',
      features: [
        'מסך דיגיטלי מובנה – שליטה בלחץ האוויר בזמן אמת',
        'עוצמה שקטה ויעילה – מנפחת תוך שניות',
        'קומפקטית וקלה – נכנסת לכל תיק ספורט'
      ],
      isTop: false
    },
    {
      id: 7,
      name: 'שער קומפקטי נייד מתקפל',
      price: 19,
      image: portable_goal,
      description: 'משחק אמיתי בכל מקום – בים, בגינה או בפארק',
      features: [
        'נפתח ומתקפל תוך שניות – ללא צורך בכלים',
        'קל במיוחד לנשיאה',
        'מתאים לכל גיל – ילדים, נוער ומבוגרים'
      ],
      isTop: false
    },
    {
      id: 10,
      name: 'קונוסי אימון חכמים',
      price: 149,
      image: '🏮',
      description: 'קונוסים בטכנולוגיה עתידנית עם חיישני LED',
      features: ['חיישני תנועה', 'תאורת LED', 'עמידים במים'],
      isTop: false
    },
    {
      id: 12,
      name: 'כדור כדורגל ביו-מטריק',
      price: 299,
      image: '⚽',
      description: 'כדור עם חיישנים למדידת מהירות וסיבוב',
      features: ['מדידת מהירות', 'חיבור לאפליקציה', 'עמידות גבוהה'],
      isTop: false
    },
    {
      id: 13,
      name: 'נעלי כדורגל קוונטום',
      price: 599,
      image: '👟',
      description: 'נעליים עם טכנולוגיית אחיזה מתקדמת',
      features: ['חומרים חכמים', 'אחיזה מקסימלית', 'נוחות מרבית'],
      isTop: false
    },
    {
      id: 14,
      name: 'שער אימון מתקפל',
      price: 399,
      image: '🥅',
      description: 'שער עם רשת חכמה שמודדת דיוק',
      features: ['מתקפל בקלות', 'רשת חכמה', 'מד דיוק מובנה'],
      isTop: false
    },
    {
      id: 15,
      name: 'רשת אימון 3D',
      price: 199,
      image: '🕸️',
      description: 'רשת תלת-מימדית לאימון מיומנויות',
      features: ['עיצוב תלת-מימדי', 'חזקה במיוחד', 'קלה להתקנה'],
      isTop: false
    },
    {
      id: 16,
      name: 'חליפת אימון חכמה',
      price: 449,
      image: '👕',
      description: 'חליפה עם חיישני ביצועים מובנים',
      features: ['מדידת דופק', 'ווסת טמפרטורה', 'עמידה בזיעה'],
      isTop: false
    },
  ];

  export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    features: string[];
    isTop: boolean;
  };

  export type CartItem = {
  product: Product;
  quantity: number;
};

