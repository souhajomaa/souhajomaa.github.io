import { useEffect, useState } from 'react'

export default function Typewriter({ words, typeSpeed = 80, deleteSpeed = 40, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const delay = !deleting && text === word ? pause : deleting ? deleteSpeed : typeSpeed

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1.1em] bg-sky align-middle ml-1 animate-pulse" />
    </span>
  )
}