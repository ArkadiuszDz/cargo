import React from 'react';
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2>We could not find this ship.</h2>
      <div className='mx-auto p-3 flex justify-center'>
        <Link href="/" className="underline text-lg">Return to homepage</Link>
      </div>
    </div>
  );
};


export default NotFound;
