import React from 'react';
import Link from 'next/link'

const NotFound = () => {

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-[34px] font-bold">This page does not exist.</h2>
      <div className='mx-auto p-3 flex justify-center'>
        <Link href="/" className="underline text-lg">Return to homepage</Link>
      </div>
    </div>
  );
};


export default NotFound;
