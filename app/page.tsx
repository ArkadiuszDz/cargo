import React from 'react';
import ListItem from './_components/listItem';
import List from './_components/list';
import { getShipData } from './_utils/api';

const HomePage = async () => {
  const { data } = await getShipData<Ship[]>();

  return (
    <List>
      {data.map((ship: Ship) => {
        return (
          <ListItem key={ship.name} id={ship.id} name={ship.name} owner={ship.owner} teu={ship.maxTEU}/>
        )
      })}
    </List>
  );
};


export default HomePage;
