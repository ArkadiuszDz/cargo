'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
      <h2 className='font-bold text-[34px] mb-4'>Something went wrong!</h2>
        <button 
          type="button"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Try again
        </button>
      </body>
    </html>
  )
}