export type SiteNavItem = {
  title: string;
  to: string;
};

export type ServiceItem = {
  title: string;
  fromPrice: string;
  description: string;
  icon: string;
  highlight?: boolean;
};

export type ProjectCase = {
  slug: string;
  title: string;
  location: string;
  area: string;
  budget: string;
  duration: string;
  summary: string;
  image: string;
  highlights: string[];
};

export type ReviewItem = {
  name: string;
  source: string;
  date: string;
  text: string;
};

export const siteData = {
  brandName: "Проф Ремонт Квартир",
  shortBrand: "PRK",
  siteUrl: "https://remdom22.ru",
  city: "Барнаул",
  phone: "+79039484299",
  phoneDisplay: "+7 (903) 948-42-99",
  whatsapp: "https://wa.me/79039484299",
  telegram: "https://t.me/remdom22",
  vk: "https://vk.com/remdom22",
  dzen: "https://dzen.ru/remdom22",
  email: "info@remdom22.ru",
  workHours: "Ежедневно с 9:00 до 18:00",
  address: "г. Барнаул, Власихинская улица, 65а к1, офис 20",
  response: "Выезд замерщика в течение 1-2 дней",
  experience: "Более 15 лет",
  heroTitle: "Проф ремонт квартир в Барнауле",
  heroText:
    "Делаем ремонт квартир, домов и офисов под ключ: от замера и сметы до чистовой отделки и комплектации. Прозрачные этапы, понятные сроки и контроль качества на объекте.",
  nav: [
    { title: "Главная", to: "/" },
    { title: "О компании", to: "/o-kompanii" },
    { title: "Проекты", to: "/dizain-i-remont" },
    { title: "Услуги", to: "/uslugi-po-remontu-i-dizainu" },
    { title: "Строительство", to: "/stroitelstvo-domov" },
  ] satisfies SiteNavItem[],
  services: [
    {
      title: "Выезд замерщика и консультация",
      fromPrice: "Бесплатно",
      highlight: true,
      description: "Осмотр объекта, постановка задачи и первичный план работ.",
      icon: "/illustrations/icon-consult.svg",
    },
    {
      title: "Ремонт комнат, квартир и офисов",
      fromPrice: "от 4 000 ₽",
      description:
        "Черновая и чистовая отделка, локальный и капитальный ремонт под ключ.",
      icon: "/illustrations/icon-renovation.svg",
    },
    {
      title: "Дизайн-проект интерьера",
      fromPrice: "от 2 500 ₽/м²",
      description:
        "Планировочные решения, визуализации и рабочие чертежи для реализации.",
      icon: "/illustrations/icon-design.svg",
    },
    {
      title: "Электромонтажные работы",
      fromPrice: "от 600 ₽/точка",
      description:
        "Щиты, освещение, розетки и безопасная модернизация электрики в квартире.",
      icon: "/illustrations/icon-electric.svg",
    },
    {
      title: "Ремонт санузла под ключ",
      fromPrice: "от 120 000 ₽",
      description:
        "Демонтаж, гидроизоляция, плитка, сантехника и инженерные узлы.",
      icon: "/illustrations/icon-bathroom.svg",
    },
    {
      title: "Прочие строительные работы",
      fromPrice: "По договоренности",
      description:
        "Нестандартные задачи, доработки помещений и работы по участку.",
      icon: "/illustrations/icon-build.svg",
    },
  ] satisfies ServiceItem[],
  stages: [
    {
      title: "Разработка проекта",
      description:
        "Фиксируем задачу и формат работ, подключаем дизайнера при необходимости.",
    },
    {
      title: "Подбор материалов",
      description: "Подбираем материалы и согласовываем техническую часть.",
    },
    {
      title: "Сроки и график",
      description: "Согласовываем этапы и дедлайны до начала работ.",
    },
    {
      title: "Смета и договор",
      description: "Утверждаем стоимость, объем и условия до старта.",
    },
  ],
  faq: [
    {
      question: "Можно сделать только часть работ?",
      answer:
        "Да, выполняем отдельные этапы: демонтаж, электрику, санузел, чистовую отделку и другие задачи по вашему запросу.",
    },
    {
      question: "Кто закупает материалы?",
      answer:
        "Материалы можете закупать вы или мы по согласованному списку. Помогаем с выбором и проверкой совместимости позиций.",
    },
    {
      question: "Сколько длится ремонт?",
      answer:
        "Срок зависит от объема работ. После замера даем детальный график и фиксируем сроки в договоре.",
    },
  ],
};

export const companyFacts = [
  {
    title: "500+ объектов",
    description:
      "От локального обновления комнат до комплексных ремонтов квартир и офисов.",
    icon: "/illustrations/fact-objects.svg",
  },
  {
    title: "1000+ клиентов",
    description:
      "Работаем с частными и корпоративными заказчиками, бережно ведем каждый проект.",
    icon: "/illustrations/fact-clients.svg",
  },
  {
    title: "Гарантия 2 года",
    description:
      "Фиксируем обязательства в договоре и остаемся на связи после завершения работ.",
    icon: "/illustrations/fact-shield.svg",
  },
];

export const reviews: ReviewItem[] = [
  {
    name: "Ольга В.",
    source: "Яндекс Карты",
    date: "15 февраля 2026",
    text: "Сложный ремонт прошел спокойно: мастера всегда были на связи и держали сроки по этапам.",
  },
  {
    name: "Дмитрий К.",
    source: "2ГИС",
    date: "21 января 2026",
    text: "Смета прозрачная, работы аккуратные. Команду уверенно рекомендую.",
  },
  {
    name: "Марина П.",
    source: "Яндекс Карты",
    date: "7 марта 2026",
    text: "Отличная организация работ и внимательное отношение к деталям. Спасибо за результат.",
  },
  {
    name: "Алексей Т.",
    source: "2ГИС",
    date: "2 апреля 2026",
    text: "Ремонт сделали качественно и без лишней суеты, все договоренности выполнили.",
  },
];

export const projectCases: ProjectCase[] = [
  {
    slug: "laplandiya",
    title: "ЖК «Лапландия»",
    location: "Барнаул",
    area: "80 м²",
    budget: "2 160 000 ₽",
    duration: "4 месяца",
    summary:
      "Светлый семейный интерьер с продуманной системой хранения и акцентной подсветкой.",
    image: "/illustrations/project-laplandiya.svg",
    highlights: [
      "Перепланировка кухни-гостиной",
      "Индивидуальные встроенные шкафы",
      "Шумоизоляция спальной зоны",
    ],
  },
  {
    slug: "plombir",
    title: "ЖК «Пломбир»",
    location: "Барнаул",
    area: "105 м²",
    budget: "2 992 500 ₽",
    duration: "5 месяцев",
    summary:
      "Интерьер в нейтральной гамме с мебелью под заказ и технологичным освещением.",
    image: "/illustrations/project-plombir.svg",
    highlights: [
      "Сложные потолочные сценарии света",
      "Единый стиль всех мокрых зон",
      "Скрытые инженерные коммуникации",
    ],
  },
  {
    slug: "kvartiri-80kvm",
    title: "Квартира 80 м²",
    location: "Барнаул",
    area: "80 м²",
    budget: "2 160 000 ₽",
    duration: "4 месяца",
    summary:
      "Практичное пространство для семьи с детьми: износостойкие материалы и много хранения.",
    image: "/illustrations/project-80.svg",
    highlights: [
      "Усиленная электрика под бытовую технику",
      "Теплый пол в ключевых зонах",
      "Система проходных выключателей",
    ],
  },
  {
    slug: "kvartiri-119kvm",
    title: "Квартира 119,7 м²",
    location: "Барнаул",
    area: "119,7 м²",
    budget: "2 992 500 ₽",
    duration: "6 месяцев",
    summary:
      "Большая квартира с разделением на приватные и гостевые зоны, индивидуальные решения по мебели.",
    image: "/illustrations/project-119.svg",
    highlights: [
      "Полный цикл от проекта до комплектации",
      "Две полноценные ванные комнаты",
      "Многоуровневое освещение в гостиной",
    ],
  },
  {
    slug: "kvartiri-60kvm",
    title: "Квартира 60 м²",
    location: "Барнаул",
    area: "60 м²",
    budget: "900 000 ₽",
    duration: "3 месяца",
    summary:
      "Сбалансированный ремонт под сдачу: надежные материалы и нейтральный дизайн.",
    image: "/illustrations/project-60.svg",
    highlights: [
      "Быстрые сроки без потери качества",
      "Усиленная влагозащита санузла",
      "Подготовка под установку кухни",
    ],
  },
  {
    slug: "kvartiri-75kvm",
    title: "Квартира 75 м²",
    location: "Барнаул",
    area: "75 м²",
    budget: "2 100 000 ₽",
    duration: "4 месяца",
    summary:
      "Современный интерьер со встроенной мебелью и продуманной эргономикой для ежедневной жизни.",
    image: "/illustrations/project-75.svg",
    highlights: [
      "Подготовка под умный дом",
      "Шумоизоляция детской комнаты",
      "Скрытые двери и аккуратные узлы",
    ],
  },
];

export const constructionDirections = [
  {
    title: "Строительство домов и коттеджей",
    description:
      "От фундамента до отделки: проектирование, инженерия и авторский контроль.",
    icon: "/illustrations/build-home.svg",
  },
  {
    title: "Строительство гаражей",
    description:
      "Проектируем удобные и долговечные конструкции под ваш участок и задачи.",
    icon: "/illustrations/build-garage.svg",
  },
  {
    title: "Ландшафтный дизайн",
    description:
      "Создаем визуально цельное и практичное пространство вокруг дома.",
    icon: "/illustrations/build-landscape.svg",
  },
  {
    title: "Благоустройство территорий",
    description:
      "Дорожки, освещение, дренаж и функциональные зоны для комфортной эксплуатации.",
    icon: "/illustrations/build-area.svg",
  },
];

export const privacyPolicySections = [
  {
    title: "1. Какие данные мы обрабатываем",
    text: "Имя, телефон, email и комментарий, которые вы добровольно отправляете через формы сайта.",
  },
  {
    title: "2. Для чего используются данные",
    text: "Для связи по вашей заявке, подготовки сметы, согласования сроков и дальнейшего сопровождения проекта.",
  },
  {
    title: "3. Хранение и защита",
    text: "Данные хранятся ограниченный срок и используются только в рамках исполнения заявки.",
  },
  {
    title: "4. Передача третьим лицам",
    text: "Не передаем персональные данные третьим лицам, кроме случаев, предусмотренных законодательством РФ.",
  },
  {
    title: "5. Контакты по вопросам данных",
    text: "По запросам об обработке персональных данных: +7 (903) 948-42-99, либо через форму на сайте.",
  },
];
