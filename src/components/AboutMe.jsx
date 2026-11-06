import { useState } from 'react'
import Section from './Section.jsx'
import Typewriter from './Typewriter.jsx'

// Défini hors du composant pour que le tableau garde la même référence
const titles = ['Cloud Security Engineering', 'DevSecOps Engineering', 'Seeking a PFE internship 2027']

const info = [
  ['focus', 'Secure Cloud-Native Apps · CI/CD '],
  ['status', 'Seeking a PFE internship'],
]

export default function AboutMe() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <Section id="about" command="whoami" className="pt-20 pb-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Texte à gauche */}
        <div className="max-w-2xl">
           <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Souha <span className="glow-text">Jomaa</span>
          </h1>

          {/* Titre animé + localisation */}
          <p className="mt-4 font-mono text-lg sm:text-xl text-sky min-h-[1.75rem]">
            <span className="text-gray-500">&gt; </span>
            <Typewriter words={titles} />
          </p>

          <p className="mt-5 text-gray-400">
            Final-year Computer Engineering student specializing in Cloud Computing and
            Cybersecurity. I build secure cloud-native applications and secure CI/CD pipelines,
            with a strong interest in AI Security.
          </p>

       

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-violet to-sky text-white text-sm font-medium">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 rounded-full border border-line text-gray-300 text-sm font-medium hover:border-sky hover:text-sky transition-colors">
              View Projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}CV__Jomaa_Souha.pdf`}
              download="CV__Jomaa_Souha.pdf"
              className="px-6 py-3 rounded-full border border-violet/60 text-violet text-sm font-medium hover:bg-violet/10 transition-colors"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Photo circulaire à droite */}
        <div className="relative shrink-0">
          <div className="absolute -inset-10 glow-ring rounded-full" />
          <div className="relative p-1 rounded-full bg-gradient-to-br from-violet to-sky">
            {photoOk ? (
              <img
                src={`${import.meta.env.BASE_URL}photo.png`}
                alt="Souha Jomaa"
                onError={() => setPhotoOk(false)}
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full object-cover bg-panel"
              />
            ) : (
              <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-panel flex items-center justify-center font-display text-5xl text-white">
                SJ
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}