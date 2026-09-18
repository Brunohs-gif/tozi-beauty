export interface Testimonial {
  initials: string
  quote: string
}

/** Depoimentos fictícios, para fins de demonstração — substituir por relatos reais e autorizados */
export const testimonials: Testimonial[] = [
  {
    initials: 'M. R.',
    quote:
      'Eu queria me sentir mais descansada, mas sem mudar quem eu sou. O resultado ficou muito delicado.',
  },
  {
    initials: 'A. C.',
    quote:
      'Desde a primeira avaliação, senti que o atendimento era realmente personalizado.',
  },
  {
    initials: 'L. P.',
    quote:
      'Tudo foi explicado com muita clareza e o acompanhamento fez diferença.',
  },
]
