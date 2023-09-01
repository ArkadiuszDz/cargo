import React from 'react';
import Link from 'next/link'
import ShipNotFound from '@/app/_components/shipNotFound';
import { ResponseCodes } from '@/app/_utils/constants';
import { getCountryOfOrigin } from '@/app/_utils/helpers';
import { getShipData } from '@/app/_utils/api';


interface Props {
  params: {
    shipId: number;
  }
}

const Ship: React.FC<Props> = async ({ params: { shipId }}) => {
  
  const { data, status } = await getShipData<Ship>(shipId);

  const countryOfOrigin = getCountryOfOrigin(data.owner);

  if (status === ResponseCodes.NotFound) {
    return <ShipNotFound />;
  }

  return (
    <div>
      <h2 className="font-bold text-center mb-4 text-[34px]">{data.name}</h2>
      <div className="flex flex-col gap-3 mb-6">
        {countryOfOrigin && <p><strong>Country of origin:</strong> {countryOfOrigin}</p>}
        <p><strong>Built:</strong> {data.built}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Length in meters:</strong> {data.lengthMeters}</p>
        <p><strong>Beam in meters:</strong> {data.beamMeters}</p>
        <p><strong>TEU:</strong> {data.maxTEU}</p>
        <p><strong>Owner:</strong> {data.owner}</p>
        <p><strong>Gross tonnage:</strong> {data.grossTonnage}</p>
      </div>
      <div className='mx-auto p-3 flex justify-center'>
        <Link href="/" className="underline text-lg">Return to homepage</Link>
      </div>
    </div>
  );
};

export default Ship;
