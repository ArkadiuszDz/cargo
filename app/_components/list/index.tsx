import React from 'react';
import classes from './list.module.scss';

interface Props {
  children: React.ReactNode;
}

const List: React.FC<Props> = ({ children }) => {

  return (
    <ul className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 grid-rows-3 gap-2">
      {children}
    </ul>
  );
};

export default List;
  