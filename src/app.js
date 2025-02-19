const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortal = require('@bot-whatsapp/portal')

const WebWhatsappProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/json')

const flowPrincipal = addKeyword('hola').addAnswer('Buenas!')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(WebWhatsappProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

QRPortal()
main()
