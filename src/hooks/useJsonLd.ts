import { useEffect } from 'react'

export function useJsonLd(id: string, data: object) {
  const json = JSON.stringify(data)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.text = json
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [id, json])
}
