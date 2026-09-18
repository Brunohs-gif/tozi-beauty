import { procedureImages } from '../config/images'

export interface Procedure {
  id: string
  number: string
  title: string
  summary: string
  image: string
  indication: string
  benefits: string[]
  evaluation: string
}

export const procedures: Procedure[] = [
  {
    id: 'labios',
    number: '01',
    title: 'Aumento e contorno labial',
    summary:
      'Definição, hidratação e equilíbrio dos lábios respeitando a proporção do rosto.',
    image: procedureImages.labios,
    indication:
      'Indicado para quem deseja mais definição, simetria ou hidratação labial, respeitando as proporções naturais do rosto.',
    benefits: [
      'Contorno mais definido e simétrico',
      'Hidratação e viço aparente',
      'Equilíbrio com o restante do terço inferior',
    ],
    evaluation:
      'A avaliação analisa formato, volume atual, musculatura perioral e histórico de procedimentos anteriores antes de qualquer indicação.',
  },
  {
    id: 'preenchimento',
    number: '02',
    title: 'Preenchimento facial',
    summary: 'Estratégias personalizadas para devolver suporte, contorno e harmonia.',
    image: procedureImages.preenchimento,
    indication:
      'Indicado para perda de suporte, assimetrias ou desejo de realçar determinadas regiões do rosto de forma equilibrada.',
    benefits: [
      'Suporte e contorno mais definidos',
      'Suavização de sulcos e depressões',
      'Harmonia entre as regiões do rosto',
    ],
    evaluation:
      'Avaliamos estrutura óssea, qualidade de pele e objetivo pessoal para planejar volume e técnica mais adequados.',
  },
  {
    id: 'bioestimulador',
    number: '03',
    title: 'Bioestimuladores de colágeno',
    summary: 'Estímulo gradual para melhorar firmeza, textura e qualidade da pele.',
    image: procedureImages.bioestimulador,
    indication:
      'Indicado para quem busca melhora progressiva de firmeza e qualidade de pele, com resultado que se constrói ao longo do tempo.',
    benefits: [
      'Estímulo natural de colágeno',
      'Melhora perceptível de firmeza e textura',
      'Resultado gradual e cumulativo',
    ],
    evaluation:
      'A indicação considera grau de flacidez, expectativa de tempo de resultado e histórico de saúde da pele.',
  },
  {
    id: 'toxina',
    number: '04',
    title: 'Toxina botulínica',
    summary: 'Suavização de linhas e prevenção com resultado leve e natural.',
    image: procedureImages.toxina,
    indication:
      'Indicado para linhas dinâmicas de expressão e, em alguns casos, como estratégia preventiva conforme avaliação individual.',
    benefits: [
      'Suavização de linhas de expressão',
      'Expressão facial preservada',
      'Resultado leve, sem efeito "congelado"',
    ],
    evaluation:
      'Avaliamos padrão de movimentação facial e musculatura para dosagem individualizada.',
  },
  {
    id: 'skinbooster',
    number: '05',
    title: 'Skinboosters e hidratação profunda',
    summary: 'Mais viço, luminosidade e hidratação para uma pele com aparência saudável.',
    image: procedureImages.skinbooster,
    indication:
      'Indicado para peles desidratadas, opacas ou com textura irregular, buscando aparência mais saudável e luminosa.',
    benefits: [
      'Hidratação profunda da pele',
      'Mais luminosidade percebida',
      'Melhora de textura em sessões seriadas',
    ],
    evaluation:
      'A avaliação considera tipo de pele, rotina de cuidados atual e objetivos de curto e médio prazo.',
  },
  {
    id: 'protocolo',
    number: '06',
    title: 'Protocolos personalizados',
    summary: 'Combinações planejadas a partir das necessidades e objetivos individuais.',
    image: procedureImages.protocolo,
    indication:
      'Indicado para quem busca um plano combinado de procedimentos, construído em etapas conforme evolução e resposta individual.',
    benefits: [
      'Planejamento estruturado em etapas',
      'Combinação de técnicas conforme objetivo',
      'Acompanhamento contínuo do processo',
    ],
    evaluation:
      'O protocolo é desenhado após avaliação completa, com prioridades definidas em conjunto com a paciente.',
  },
]
