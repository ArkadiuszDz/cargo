'use client'
 
import { useEffect } from 'react'
import Link from 'next/link'
 
export default function Error({
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
      <div className="flex flex-col gap-3 items-center">
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
        </button> <p className="font-bold">or</p>
        <Link href="/" className="underline text-lg">Return to homepage.</Link>
      </div>
  )
}