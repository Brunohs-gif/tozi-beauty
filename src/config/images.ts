/**
 * IMAGENS DO SITE
 * ============================================================================
 * Imagens reais já recebidas ficam em /public/images e são referenciadas
 * aqui por caminho local (ex.: '/images/biomedica-hero.jpeg'). O que ainda
 * não foi recebido continua apontando para fotos de banco gratuito
 * (Unsplash), usadas apenas como referência visual temporária — troque pela
 * foto real e autorizada assim que ela for salva em /public/images, mantendo
 * o nome da constante para não quebrar o layout.
 *
 * Arquivos ainda pendentes (salvar em /public/images com estes nomes,
 * qualquer extensão — .jpg, .jpeg ou .png — é aceita):
 *   pele-detalhe.*          (selo/foto pequena da seção "Sobre")
 *   procedimento-preenchimento.*
 *   procedimento-bioestimulador.*
 *   procedimento-toxina.*
 *   procedimento-skinbooster.*
 *   procedimento-protocolo.*
 *   antes-labios.* / depois-labios.*
 *   antes-pele.*   / depois-pele.*
 *   foto-zoom-labios.* / foto-zoom-pele.*
 *     (foto usada na caixa "Detalhe em foco" com efeito de lente, ao lado
 *     do comparador — é uma foto própria, diferente da foto "depois" do
 *     slider. Até ser enviada, cai no fallback da foto "depois" do caso.)
 * ============================================================================
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/** Imagem principal da hero — foto real recebida */
export const heroImage = '/images/biomedica-hero.jpeg'

/** Foto da biomédica usada na seção "Sobre" e na seção pessoal — mesma constante nas duas, troque uma vez só. Foto real recebida */
export const clinicianImage = '/images/biomedica-perfil.jpeg'

/** Foto secundária usada na composição da seção "Sobre". Pendente: /images/pele-detalhe.* */
export const aboutSecondaryImage = unsplash('photo-1570172619644-dfd03ed5d881', 900)

/** Imagens por procedimento (aparecem na lista editorial ao passar o mouse) */
export const procedureImages: Record<string, string> = {
  labios: '/images/procedimento-labios.jpg',
  preenchimento: unsplash('photo-1552693673-1bf958298935', 1000),
  bioestimulador: unsplash('photo-1616394584738-fc6e612e71b9', 1000),
  toxina: unsplash('photo-1512290923902-8a9f81dc236c', 1000),
  skinbooster: unsplash('photo-1570172619644-dfd03ed5d881', 1000),
  protocolo: unsplash('photo-1519824145371-296894a0daa9', 1000),
}

/**
 * Pares antes/depois — ilustrativos, não são resultados reais de pacientes.
 * `zoom` é a foto própria da caixa "Detalhe em foco" (lente de aumento);
 * se não for enviada, cai automaticamente na foto "after" do mesmo caso.
 */
export const beforeAfterImages: Record<string, { before: string; after: string; zoom?: string }> = {
  labios: {
    before: unsplash('photo-1544005313-94ddf0286df2', 900),
    after: unsplash('photo-1522335789203-aabd1fc54bc9', 900),
  },
  pele: {
    before: unsplash('photo-1571019613454-1cb2f99b2d8b', 900),
    after: unsplash('photo-1570172619644-dfd03ed5d881', 900),
  },
  harmonia: {
    before: '/images/antes-harmonia.jpg',
    after: '/images/depois-harmonia.jpg',
    zoom: '/images/foto-zoom-harmonia.jpg',
  },
}
