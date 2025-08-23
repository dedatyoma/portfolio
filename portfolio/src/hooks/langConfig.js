import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      caseStudies: "Projects",
      getInTouch: "Get In Touch",
      name: "Artem Burdykin",
      mePar: "I am a graduate of two courses provided by the Ukrainian IT School Hillel. I have a solid foundation in HTML, CSS/SCSS, JavaScript (ES6+), React, and related libraries. Over the past year, I've gained hands-on experience in developing web products.",
      letGetStarted: "Let's get started",
      workedWith: "Worked with",
      myProjects: "My Projects",
      presentProjects: "Here are some of my recent projects:",
      view: "Look at the project here",
      ecommerceLabel: "E-commerce Website",
      ecommerceDescription: "I developed a dynamic and responsive e-commerce web application that allows users to browse products, add items to a cart, and complete purchases. It includes features such as product filtering, pagination, and a persistent shopping cart powered by Redux Toolkit. The design is clean and user-friendly, ensuring a smooth shopping experience across devices.",
      parallaxLabel: "Parallax Website",
      parallaxDescription: "This project is a visually engaging multi-section website built with parallax scrolling effects. It creates a storytelling experience as the user scrolls, with layered backgrounds moving at different speeds. I focused on performance optimization, responsive layout, and subtle animations to deliver an immersive UI with smooth transitions.",
      dashboardLabel: "Dashboard Page",
      dashboardDescription: "I designed and built a modern admin dashboard that displays key metrics using charts, tables, and status cards. The interface is fully responsive and interactive, offering real-time data visualization. I implemented modular components and followed clean architecture practices to make the dashboard scalable and maintainable.",
      connect:"I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello — feel free to reach out using the form below. We’ll get back to you as soon as possible.",
      eMail: "Email",
      mobile: "Mobile",
      message: "Message",
      submit: "Submit",
      madeWithPassion: "Made with passion"
    },
  },
  ua: {
    translation: {
      home: "Головна",
      caseStudies: "Проєкти",
      getInTouch: "Зв'язатися",
      name: "Артем Бурдикін",
      mePar: "Я випускник двох курсів Української IT Школи Hillel. Маю міцну основу в HTML, CSS/SCSS, JavaScript (ES6+), React та пов'язаних бібліотеках. За останній рік я набув практичного досвіду в розробці веб-продуктів.",
      letGetStarted: "Почнемо",
      workedWith: "Працював з",
      myProjects: "Мої проекти",
      presentProjects: "Ось кілька моїх останніх проектів:",
      view: "Переглянути",
      ecommerceLabel: "E-commerce Вебсайт",
      ecommerceDescription: "Я розробив динамічну та адаптивну веб-програму електронної комерції, яка дозволяє користувачам переглядати товари, додавати товари до кошика та здійснювати покупки. Вона включає такі функції, як фільтрація товарів, пагінація та постійний кошик для покупок, що працює на Redux Toolkit. Дизайн чистий та зручний для користувача, забезпечуючи плавний досвід покупок на всіх пристроях.",
      parallaxLabel: "Паралакс Вебсайт",
      parallaxDescription: "Цей проект - це візуально привабливий багатосекційний вебсайт, створений з ефектами паралакс прокрутки. Він створює досвід розповіді, коли користувач прокручує, з шарами фону, що рухаються з різною швидкістю. Я зосередився на оптимізації продуктивності, адаптивному макеті та тонких анімаціях для створення захоплюючого інтерфейсу з плавними переходами.",
      dashboardLabel: "Сторінка Панелі",
      dashboardDescription: "Я спроектував та створив сучасну адміністративну панель, яка відображає ключові метрики за допомогою діаграм, таблиць та карток статусу. Інтерфейс повністю адаптивний та інтерактивний, пропонуючи візуалізацію даних у реальному часі. Я реалізував модульні компоненти та слідував принципам чистої архітектури, щоб зробити панель масштабованою та зручною для підтримки.",
      connect:"Я буду радий почути вас! Незалежно від того, чи є у вас питання, ідея проекту або ви просто хочете сказати привіт — не соромтеся звертатися за допомогою форми нижче. Ми зв'яжемося з вами якомога швидше.",
      eMail: "Електронна пошта",
      mobile: "Мобільний",
      message: "Повідомлення",
      submit: "Відправити",
      madeWithPassion: "Зроблено з любов'ю"
    },
  },
  es: {
    translation: {
      home: "Inicio",
      caseStudies: "Proyectos",
      name: "Artem Burdykin",
      getInTouch: "Ponerse en Contacto",
      mePar: "Soy graduado de dos cursos proporcionados por la Escuela IT Ucraniana Hillel. Tengo una base sólida en HTML, CSS/SCSS, JavaScript (ES6+), React y bibliotecas relacionadas. Durante el último año, he ganado experiencia práctica en el desarrollo de productos web.",
      letGetStarted: "Empecemos",
      workedWith: "He trabajado con",
      myProjects: "Mis Proyectos",
      presentProjects: "Aquí hay algunos de mis proyectos recientes:",
      view: "Ver",
      ecommerceLabel: "Sitio Web de E-commerce",
      ecommerceDescription: "Desarrollé una aplicación web de e-commerce dinámica y responsiva que permite a los usuarios navegar por productos, agregar artículos al carrito y completar compras. Incluye características como filtrado de productos, paginación y un carrito de compras persistente impulsado por Redux Toolkit. El diseño es limpio y fácil de usar, asegurando una experiencia de compra fluida en todos los dispositivos.",
      parallaxLabel: "Sitio Web con Parallax",
      parallaxDescription: "Este proyecto es un sitio web multisectorial visualmente atractivo construido con efectos de desplazamiento parallax. Crea una experiencia narrativa mientras el usuario se desplaza, con fondos en capas que se mueven a diferentes velocidades. Me enfoqué en la optimización del rendimiento, el diseño responsivo y las animaciones sutiles para entregar una interfaz inmersiva con transiciones suaves.",
      dashboardLabel: "Página del Panel",
      dashboardDescription: "Diseñé y construí un panel de administración moderno que muestra métricas clave usando gráficos, tablas y tarjetas de estado. La interfaz es completamente responsiva e interactiva, ofreciendo visualización de datos en tiempo real. Implementé componentes modulares y seguí prácticas de arquitectura limpia para hacer el panel escalable y mantenible.",
      connect:"¡Me encantaría saber de ti! Ya sea que tengas una pregunta, una idea de proyecto o simplemente quieras saludar, no dudes en comunicarte utilizando el formulario a continuación. Nos pondremos en contacto contigo lo antes posible",
      eMail: "Correo Electrónico",
      mobile: "Móvil",  
      message: "Mensaje",
      submit: "Enviar",
      madeWithPassion: "Hecho con pasión"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
