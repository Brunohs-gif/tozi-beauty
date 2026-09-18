import { beforeAfterImages } from '../config/images'

export interface BeforeAfterCase {
  id: string
  label: string
  before: string
  after: string
  /** Foto exibida na caixa "Detalhe em foco" (lente de aumento) — própria, diferente da foto "after" do slider */
  zoom: string
  /**
   * Ponto focal do recorte (CSS object-position, ex. "22% 48%"), usado quando
   * as fotos de antes/depois têm enquadramento ou zoom diferentes. Alinha o
   * mesmo ponto do rosto (aqui, o olho) no centro do recorte de cada imagem,
   * para o slider não "pular" o rosto de um lado pro outro. Não corrige
   * diferença de escala/zoom entre as fotos — só de posição.
   */
  beforeFocal?: string
  afterFocal?: string
}

/** Casos ilustrativos — usar imagens reais somente mediante autorização expressa da paciente */
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'labios',
    label: 'Contorno e hidratação labial',
    before: beforeAfterImages.labios.before,
    after: beforeAfterImages.labios.after,
    zoom: beforeAfterImages.labios.zoom ?? beforeAfterImages.labios.after,
  },
  {
    id: 'pele',
    label: 'Qualidade e viço da pele',
    before: beforeAfterImages.pele.before,
    after: beforeAfterImages.pele.after,
    zoom: beforeAfterImages.pele.zoom ?? beforeAfterImages.pele.after,
  },
  {
    id: 'harmonia',
    label: 'Harmonia do terço inferior',
    before: beforeAfterImages.harmonia.before,
    after: beforeAfterImages.harmonia.after,
    zoom: beforeAfterImages.harmonia.zoom ?? beforeAfterImages.harmonia.after,
    // Fotos com zoom/enquadramento diferentes — ponto focal no olho de cada uma,
    // medido manualmente nas fotos originais, para alinhar o recorte.
    beforeFocal: '22% 48%',
    afterFocal: '43% 40%',
  },
]
