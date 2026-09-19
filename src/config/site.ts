/**
 * DADOS EDITÁVEIS DO NEGÓCIO
 * Centralize aqui tudo que muda com frequência: contato, endereço, horários,
 * dados da profissional. Nada de conteúdo de seção deve ficar hardcoded
 * dentro dos componentes — sempre referenciar este arquivo.
 */

export const siteConfig = {
  brandName: 'TOZI',
  brandSuffix: 'Beauty',

  /** Número de WhatsApp em formato internacional, somente dígitos — TROCAR pelo número real */
  whatsappNumber: '5511999999999',
  whatsappDefaultMessage: 'Olá! Gostaria de agendar uma avaliação na TOZI Beauty.',

  instagramHandle: '@andressatozii',
  instagramUrl: 'https://www.instagram.com/andressatozii/',

  /** Endpoint do Formspree para onde o formulário de agendamento envia os dados por e-mail */
  formspreeEndpoint: 'https://formspree.io/f/xjykkdgl',

  address: 'Rua Exemplo, 123 — Jardins, São Paulo/SP',
  hours: [
    { label: 'Terça a sexta', value: '10h às 19h' },
    { label: 'Sábado', value: '9h às 14h' },
    { label: 'Domingo e segunda', value: 'Fechado' },
  ],

  clinician: {
    name: 'Dra. [Nome da biomédica]',
    credentials: 'Biomédica esteta — CRBM [nº do registro]',
    specialties: 'Harmonização facial, bioestimuladores e protocolos personalizados de pele',
    bio: 'Com formação em biomedicina estética e atualização constante em técnicas de harmonização, atendo cada pessoa a partir de uma escuta cuidadosa antes de qualquer indicação. Acredito em resultados construídos com técnica, tempo e respeito à identidade de cada rosto.',
    signaturePhrase:
      'Meu objetivo é que você reconheça a sua beleza — não que deixe de se reconhecer.',
  },

  legal: {
    professionalNotice:
      'Os procedimentos oferecidos pela TOZI Beauty são realizados por profissional biomédica habilitada, mediante avaliação individual prévia. Resultados variam conforme organismo, técnica e protocolo indicado.',
    educationalNotice:
      'As informações desta página são educativas e não substituem uma avaliação profissional presencial.',
  },
}
