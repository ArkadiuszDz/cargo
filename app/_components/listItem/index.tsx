import React from 'react';
import Link from 'next/link'

import { getCountryOfOrigin } from '@/app/_utils/helpers';

interface Props {
  id: number;
  name: string;
  owner: string;
  teu: number;
}

const ListItem: React.FC<Props> = ({ id, name, owner, teu }) => {
  const countryOfOrigin = getCountryOfOrigin(owner);

  return (
    <li className="border-solid border-2 border-blue-800 bg-blue-300 hover:bg-gray-100 p-2">
      <Link href={`/${id}`} className="block h-full">
        <h2 className="font-bold">{name}</h2>
        {countryOfOrigin && <p>Country of origin: {countryOfOrigin}</p>}
        <p>TEU: {teu}</p>
      </Link>
    </li>
  );
};

export default ListItem;
