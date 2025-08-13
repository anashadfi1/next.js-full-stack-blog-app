'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <html>
        <body>
            <h2>Global Error</h2>
        </body>
    </html>
  )
}