import { useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import { procedures } from '../../data/procedures'
import { Toast } from '../ui/Toast'
import { RevealOnScroll } from '../ui/RevealOnScroll'

interface FormState {
  name: string
  whatsapp: string
  procedure: string
  period: string
  message: string
}

const initialState: FormState = {
  name: '',
  whatsapp: '',
  procedure: '',
  period: '',
  message: '',
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Informe seu nome.'
  if (!values.whatsapp.trim()) {
    errors.whatsapp = 'Informe um número de WhatsApp.'
  } else if (values.whatsapp.replace(/\D/g, '').length < 10) {
    errors.whatsapp = 'Informe um número válido, com DDD.'
  }
  if (!values.procedure) errors.procedure = 'Selecione um procedimento de interesse.'
  if (!values.period) errors.period = 'Selecione o melhor período para contato.'
  return errors
}

export function BookingForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [toastVisible, setToastVisible] = useState(false)

  const handleChange = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    // TODO: substituir esta simulação por uma chamada real de API, ou pelo
    // redirecionamento para o WhatsApp com os dados preenchidos (wa.me).
    // Não há backend conectado neste projeto — o envio abaixo é apenas visual.
    window.setTimeout(() => {
      setStatus('success')
      setToastVisible(true)
      setValues(initialState)
      window.setTimeout(() => setToastVisible(false), 4000)
    }, 1100)
  }

  const inputClasses = (hasError: boolean) =>
    `w-full border-b bg-transparent px-1 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-coffee/40 ${
      hasError ? 'border-terracotta' : 'border-coffee/25 focus:border-ink'
    }`

  return (
    <section id="agendar" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <RevealOnScroll className="mb-12">
          <p className="mb-5 text-[13px] uppercase tracking-widest text-terracotta">
            Agendamento
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Solicite um contato.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-coffee/75">
            Preencha os dados abaixo e retornaremos para organizar a sua avaliação.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          {status === 'success' ? (
            <div
              role="status"
              className="rounded-sm border border-gold/40 bg-sand/60 p-8 text-center"
            >
              <p className="font-serif text-2xl text-ink">Recebemos a sua solicitação.</p>
              <p className="mt-3 text-sm leading-relaxed text-coffee/75">
                Em breve, alguém da nossa equipe entrará em contato pelo WhatsApp informado.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 text-[13px] uppercase tracking-widest text-terracotta underline underline-offset-4"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-[12px] uppercase tracking-widest text-coffee/60">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  className={inputClasses(Boolean(errors.name))}
                  placeholder="Seu nome completo"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-terracotta">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-1.5 block text-[12px] uppercase tracking-widest text-coffee/60">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  value={values.whatsapp}
                  onChange={handleChange('whatsapp')}
                  className={inputClasses(Boolean(errors.whatsapp))}
                  placeholder="(11) 90000-0000"
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                />
                {errors.whatsapp && (
                  <p id="whatsapp-error" className="mt-1.5 text-xs text-terracotta">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="procedure" className="mb-1.5 block text-[12px] uppercase tracking-widest text-coffee/60">
                    Procedimento de interesse
                  </label>
                  <select
                    id="procedure"
                    value={values.procedure}
                    onChange={handleChange('procedure')}
                    className={inputClasses(Boolean(errors.procedure))}
                    aria-invalid={Boolean(errors.procedure)}
                    aria-describedby={errors.procedure ? 'procedure-error' : undefined}
                  >
                    <option value="">Selecione</option>
                    {procedures.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                    <option value="nao-sei">Ainda não sei</option>
                  </select>
                  {errors.procedure && (
                    <p id="procedure-error" className="mt-1.5 text-xs text-terracotta">
                      {errors.procedure}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="period" className="mb-1.5 block text-[12px] uppercase tracking-widest text-coffee/60">
                    Melhor período para contato
                  </label>
                  <select
                    id="period"
                    value={values.period}
                    onChange={handleChange('period')}
                    className={inputClasses(Boolean(errors.period))}
                    aria-invalid={Boolean(errors.period)}
                    aria-describedby={errors.period ? 'period-error' : undefined}
                  >
                    <option value="">Selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                  </select>
                  {errors.period && (
                    <p id="period-error" className="mt-1.5 text-xs text-terracotta">
                      {errors.period}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-[12px] uppercase tracking-widest text-coffee/60">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={values.message}
                  onChange={handleChange('message')}
                  className={inputClasses(false)}
                  placeholder="Conte um pouco sobre o que você gostaria de avaliar"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-[13px] uppercase tracking-widest text-cream transition-colors hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                Solicitar contato
              </button>
            </form>
          )}
        </RevealOnScroll>
      </div>

      <Toast message="Solicitação enviada com sucesso." visible={toastVisible} />
    </section>
  )
}
