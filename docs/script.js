const translations = {

    pt: {

        title: "Seek 7 Words",

        subtitle: "Política de Privacidade",

        intro: "Esta página explica como o Seek 7 Words trata as informações dos usuários e quais serviços de terceiros são utilizados pelo aplicativo.",

        privacyTitle: "Privacidade",
        privacy1: "O Seek 7 Words não coleta nem armazena informações pessoais dos usuários.",
        privacy2: "O progresso do jogo e as preferências são armazenados apenas no dispositivo.",
        privacy3: "O aplicativo não compartilha informações pessoais diretamente. Serviços de terceiros podem tratar dados conforme suas próprias políticas.",

        adsTitle: "Publicidade",
        ads1: "O aplicativo utiliza o Google AdMob para exibir anúncios.",
        ads2: "O Google poderá coletar informações de acordo com sua própria Política de Privacidade.",
        ads3: "Ao adquirir a opção 'Remover anúncios', a publicidade deixa de ser exibida.",
        googlePrivacy: "Política de Privacidade do Google",

        billingTitle: "Compras no aplicativo",
        billing1: "As compras são processadas exclusivamente pela Google Play.",
        billing2: "O aplicativo não recebe nem armazena informações de pagamento, como cartão de crédito ou PIX.",
        billing3: "A compra 'Remover anúncios' é permanente e pode ser restaurada na mesma conta Google.",

        childrenTitle: "Privacidade de crianças",
        children1: "O aplicativo não coleta intencionalmente dados pessoais de crianças.",
        children2: "Pais ou responsáveis podem entrar em contato caso tenham dúvidas.",
        children3: "Caso seja identificada alguma informação enviada indevidamente, ela será removida quando aplicável.",

        contactTitle: "Contato",

        footer: "Feito no Brasil 🇧🇷",
        gameplayTitle: "Veja o jogo em ação",
        playStore: "Baixar na Google Play",

    },

    en: {

        title: "Seek 7 Words",

        subtitle: "Privacy Policy",

        intro: "This page explains how Seek 7 Words handles user information and which third-party services are used by the application.",

        privacyTitle: "Privacy",
        privacy1: "Seek 7 Words does not collect or store users' personal information.",
        privacy2: "Game progress and preferences are stored only on your device.",
        privacy3: "The application does not directly share personal information. Third-party services may process data according to their own privacy policies.",

        adsTitle: "Advertising",
        ads1: "This application uses Google AdMob to display advertisements.",
        ads2: "Google may collect information in accordance with its own Privacy Policy.",
        ads3: "After purchasing the 'Remove Ads' option, advertisements will no longer be displayed.",
        googlePrivacy: "Google Privacy Policy",

        billingTitle: "In-App Purchases",
        billing1: "All purchases are processed exclusively through Google Play.",
        billing2: "The application does not receive or store payment information.",
        billing3: "The 'Remove Ads' purchase is permanent and can be restored using the same Google account.",

        childrenTitle: "Children's Privacy",
        children1: "The application does not knowingly collect personal information from children.",
        children2: "Parents or guardians may contact us if they have any questions.",
        children3: "If any personal information is identified as having been provided unintentionally, it will be removed whenever applicable.",

        contactTitle: "Contact",

        footer: "Made in Brazil 🇧🇷",

        gameplayTitle: "See the game in action",
        playStore: "Get it on Google Play",
    },

    es: {

        title: "Seek 7 Words",

        subtitle: "Política de Privacidad",

        intro: "Esta página explica cómo Seek 7 Words gestiona la información de los usuarios y qué servicios de terceros utiliza la aplicación.",

        privacyTitle: "Privacidad",
        privacy1: "Seek 7 Words no recopila ni almacena información personal de los usuarios.",
        privacy2: "El progreso del juego y las preferencias se almacenan únicamente en el dispositivo.",
        privacy3: "La aplicación no comparte información personal de forma directa. Los servicios de terceros pueden procesar datos de acuerdo con sus propias políticas de privacidad.",

        adsTitle: "Publicidad",
        ads1: "Esta aplicación utiliza Google AdMob para mostrar anuncios.",
        ads2: "Google puede recopilar información de acuerdo con su propia Política de Privacidad.",
        ads3: "Al adquirir la opción 'Eliminar anuncios', la publicidad dejará de mostrarse.",
        googlePrivacy: "Política de Privacidad de Google",

        billingTitle: "Compras dentro de la aplicación",
        billing1: "Todas las compras se procesan exclusivamente a través de Google Play.",
        billing2: "La aplicación no recibe ni almacena información de pago.",
        billing3: "La compra de 'Eliminar anuncios' es permanente y puede restaurarse con la misma cuenta de Google.",

        childrenTitle: "Privacidad de los niños",
        children1: "La aplicación no recopila intencionalmente información personal de niños.",
        children2: "Los padres o tutores pueden ponerse en contacto con nosotros si tienen alguna pregunta.",
        children3: "Si se identifica información personal proporcionada por error, se eliminará cuando corresponda.",

        contactTitle: "Contacto",

        footer: "Hecho en Brasil 🇧🇷",
        
        gameplayTitle: "Mira el juego en acción",
        playStore: "Descargar en Google Play",
    }

};

function changeLanguage(lang) {

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key] ?? key;
    });

    localStorage.setItem("language", lang);
}

document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

        button.addEventListener("click", () => {

            changeLanguage(button.dataset.lang);

        });

    });
const language = localStorage.getItem("language") || "pt";
changeLanguage("pt");