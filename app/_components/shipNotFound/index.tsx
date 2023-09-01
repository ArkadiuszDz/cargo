'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const ShipNotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className='font-bold text-[34px] mb-4'>We couldn&apos;t find this ship.</h2>
      <button 
        type="button"
        onClick={() => router.back()}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Click here to go back
      </button> <p className="font-bold">or</p>
      <Link href="/" className="underline text-lg">Return to homepage.</Link>
    </div>
  );
};

export default ShipNotFound;