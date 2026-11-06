import { useState } from 'react'
import Section from './Section.jsx'

// 1. Crée un formulaire sur https://formspree.io 
// 2. Remplace YOUR_FORM_ID par l'identifiant fourni
const FORM_ENDPOINT = 'https://formspree.io/f/xkjjaokg'
const EMAIL = 'souhajomaa1412@gmail.com'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jomaasouha/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/souhajomaa',
    icon: 'https://cdn.simpleicons.org/github/white',
  },
  {
    name: 'TryHackMe',
    href: 'https://tryhackme.com/p/sojox',
    icon: 'https://cdn.simpleicons.org/tryhackme/white',
  },
]

const field =
  'w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-sky/70 transition-colors'

export default function ContactMe() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Champ piège : seuls les robots le remplissent
    if (data._gotcha) return

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: `[Portfolio] ${data.subject}` }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" command="ssh contact@souha">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Colonne gauche : texte + réseaux */}
        <div>
          <p className="text-gray-400 max-w-md">
            Open to PFE internships and opportunities in DevSecOps, cloud security and AI security.
            Send me a message, I usually reply quickly.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            
          </p>

          <h3 className="mt-10 font-mono text-sm text-violet"># you can find me on</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-line text-sm text-gray-200 hover:border-sky/60 hover:text-sky transition-colors"
              >
                <img
                  src={s.icon}
                  alt=""
                  className="w-4 h-4"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne droite : formulaire */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-line bg-panel p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" type="text" required placeholder="Your name" aria-label="Your name" className={field} />
            <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
          </div>
          <input name="subject" type="text" required placeholder="Subject" aria-label="Subject" className={field} />
          <textarea name="message" required rows={6} placeholder="Your message" aria-label="Your message" className={`${field} resize-y`} />

          {/* Champ piège anti-spam, invisible */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-violet to-sky text-white text-sm font-medium disabled:opacity-60 transition-opacity"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p role="status" className="text-sm text-emerald-400">
              Thank you! Your message was sent, I will reply soon.
            </p>
          )}
          {status === 'error' && (
            <p role="status" className="text-sm text-red-400">
              Something went wrong. Please email me directly at{' '}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}