export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'A primeira avaliação é uma conversa individual em que entendemos seu histórico, objetivos e rotina, seguida de uma análise técnica das características do seu rosto ou região de interesse. É a partir dela que possibilidades de tratamento são discutidas.',
  },
  {
    question: 'Os procedimentos são personalizados?',
    answer:
      'Sim. Cada indicação é construída a partir da avaliação individual — não trabalhamos com protocolos fixos aplicados igualmente a todas as pessoas.',
  },
  {
    question: 'O resultado fica natural?',
    answer:
      'A naturalidade é um princípio central do nosso trabalho. Buscamos resultados equilibrados e coerentes com cada rosto, evitando exageros. Ainda assim, a percepção de naturalidade pode variar conforme o caso e a técnica indicada.',
  },
  {
    question: 'Quanto tempo dura cada procedimento?',
    answer:
      'O tempo varia conforme o procedimento e o planejamento individual, podendo ir de alguns minutos a cerca de uma hora. Esse detalhamento é explicado durante a avaliação.',
  },
  {
    question: 'Existe algum preparo antes da sessão?',
    answer:
      'Alguns procedimentos podem exigir cuidados específicos antes da aplicação, como evitar determinados medicamentos ou suplementos. Essas orientações são individualizadas e passadas durante a avaliação.',
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer:
      'Acompanhamos o processo antes, durante e depois de cada procedimento, com orientações de cuidado pós-aplicação e retorno para avaliação de evolução, conforme o protocolo indicado.',
  },
  {
    question: 'Posso enviar fotos antes de agendar?',
    answer:
      'Você pode enviar fotos pelo WhatsApp para uma orientação inicial, mas a indicação definitiva de qualquer procedimento depende sempre de avaliação presencial.',
  },
  {
    question: 'O procedimento é indicado para qualquer pessoa?',
    answer:
      'Não. Cada indicação depende de uma avaliação individual de saúde, histórico e objetivos. Algumas condições podem contraindicar determinados procedimentos, o que é sempre verificado antes de qualquer aplicação.',
  },
]
