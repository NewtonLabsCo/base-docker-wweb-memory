const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowInfo = addKeyword(['info', 'informacion', 'información']).addAnswer(
    [
    'Se hace una sesión virtual por medio de la plataforma Google Meet y se graba la sesión para tu memoria.',
    'La finalidad de nuestros cursos es que aprendas la teoría básica, partes y componentes principales de los equipos biomédicos. La metodología consiste en que el equipo que escojas para capacitarte lo vamos a explicar con apoyo visual (imágenes) por videollamada y te vamos a dar a conocer  sus partes externas y sus partes internas, para que logres identificar Componenetes o subsistemas universales, con la finalidad de que apliques los conceptos adquiridos en tecnologías similares. También te vamos a guiar a solucionar fallas mediante electrónica básica para poder ejecutar primeros diagnósticos y dar posibles soluciones. Finalmente, te vamos a compartir manuales de usuario y de servicio de algunos equipos biomédicos para que lo tengas en tu biblioteca al igual que los decretos y resoluciones vigentes para áreas de ingeniería biomédica ( documentos normativos solo aplica para Colombia) junto con un certificado de entrenamiento.',
    'El tiempo ⏱ de cada curso es de aproximadamente de entre 2 a 3 horas dependiendo el equipo (introducción a servicio técnico del equipo en específico).😀👨‍💻👨🏻‍🏭👩🏻‍🏭🛠🔧',

    '\nNuestra metodología de enseñanzas ha servido para que muchos estudiantes e ingenieros fortalezcan sus bases técnicas para poder dar soporte técnico a la tecnología Biomédica fundamental hoy en día en clínicas u hospitales. Estamos ubicados en Colombia 🇨🇴 y ya hemos dictado cursos a ingenieros y estudiantes en Bolivia 🇧🇴, Peru 🇵🇪, Ecuador 🇪🇨, Mexico 🇲🇽 y República Dominicana 🇩🇴 Costa Rica 🇨🇷, El Salvador 🇸🇻, Venezuela 🇻🇪, Chile 🇨🇱, Cuba 🇨🇺. Recuerda que la parte técnica hoy en día es muy importante para dar soluciones a las empresas y bajar costos en departamentos de mantenimiento biomedico 😀',

    '\nA continuación te envío las temáticas que vemos en todos los cursos:',

    '1. Funcionamiento general',  
    '2. Partes o componentes externos.', 
    '3. Partes o Componenetes internos', 
    '4. Test de funcionamiento a realizar (si aplica)',  
    '5. Posibles fallas asociadas al hardware', 
    '6. Lista de chequeo para realizar mantenimiento preventivo', 
    '7. Herramientas que se deben tener en cuenta para un mantenimiento preventivo',


    '\nPor último, te resumo que con los cursos te proporcionamos:',

    '1. Certificado', 
    '2. Grabación de la sesión',
    '3. Carpeta con manuales de usuario y de servicio',
    '4. Carpeta con decretos y resoluciones actuales aplicables a áreas de ingeniería clínica o biomédica',

    '\nCada curso tiene un duración de entre 2 a 3 horas aproximadamente.',


    '\nCursos virtuales !!!',

    '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowRedes = addKeyword(['redes sociales']).addAnswer(
    ['🤪 Siguenos en nuestras redes sociales y no te pierdas de todo el contenido de Newton labs 🥳', 
    'Discord: https://discord.gg/sZ4xmwCkHJ',

    'Instagram: https://instagram.com/newton_labs_?igshid=YmMyMTA2M2Y=',

    'Facebook: https://www.facebook.com/newtonLabsCo',

    'YouTube: https://youtube.com/channel/UC32SPW7Wf0h0YI3_7adr91A',

    'Telegram: https://t.me/newtonlabsc',

    'Whatsaap:  wa.me/573228228029', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('👋🏻 Hola bienvenido al *Chatbot* de Newton Labs 😀')
    .addAnswer(
        [
            'Te comparto las siguientes opciones:',
            '👉 *Info* sobre nuestros cursos',
            '👉 *tutoriales*',
            '👉 *gracias*',
            '👉 *Redes sociales*',
        ],
        null,
        null,
        [flowInfo, flowGracias, flowTuto, flowRedes]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
