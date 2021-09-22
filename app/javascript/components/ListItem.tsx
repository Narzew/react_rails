import React from 'react';

type Props = {
  lesson: string;
  path: string;
};

const ListItem: React.FC<Props> = ({ lesson, path }) => {
  return (
    <a href={path}>
      <button type="button">{lesson}</button>
    </a>
  );
};

export default ListItem;
