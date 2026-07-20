import { motion } from "motion/react";
import { Section } from "../components/Section";
import { data } from "../data/ellen";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { Mail, Linkedin, MessageCircle, Download, ExternalLink } from "lucide-react";

export function Contato() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: data.contacts.email,
      href: `mailto:${data.contacts.email}`,
      description: language === 'pt' ? 'Respondo em até 24h' : language === 'en' ? 'I reply within 24h' : 'Respondo en 24h'
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: language === 'pt' ? 'Mensagem rápida' : language === 'en' ? 'Quick message' : 'Mensaje rápido',
      href: data.contacts.whatsapp,
      description: language === 'pt' ? 'Acesso direto para conversar' : language === 'en' ? 'Direct access to chat' : 'Acceso directo para charlar'
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ellencarvalho",
      href: data.contacts.linkedin,
      description: language === 'pt' ? 'Conecte-se comigo' : language === 'en' ? 'Connect with me' : 'Conéctate conmigo'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {language === 'pt'
                ? 'Estou sempre aberta a discutir novos projetos, oportunidades criativas ou parcerias estratégicas. Vamos conversar sobre como posso ajudar.'
                : language === 'en'
                ? 'I\'m always open to discussing new projects, creative opportunities, or strategic partnerships. Let\'s talk about how I can help.'
                : 'Siempre estoy abierta a discutir nuevos proyectos, oportunidades creativas o asociaciones estratégicas. Hablemos sobre cómo puedo ayudar.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center shrink-0">
                      <method.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{method.label}</h3>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <p className="text-sm text-accent mb-1 break-all">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center shrink-0">
                      <method.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CV Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={data.contacts.cv_pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-2xl bg-gradient hover:shadow-accent transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Download size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{t.contact.downloadCV}</h3>
                    <p className="text-xs text-white/70">PDF — 2.3 MB</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Interests */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">
                {t.contact.collaborationInterests}
              </h3>
              <div className="space-y-3">
                {[
                  t.contact.productStrategy,
                  t.contact.qualityConsulting,
                  t.contact.workshopsTraining,
                  t.contact.talksEvents
                ].map((interest, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
