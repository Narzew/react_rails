import React from 'react';

type Props = {
  lesson: { name: string; difficulty: string; content: string };
  path: string;
};

const DetailedView: React.FC<Props> = ({ lesson, path }) => {
  return (
    <div>
      <p>Name: {lesson.name}</p>
      <p>Difficulty: {lesson.difficulty}</p>
      <p>Content: {lesson.content}</p>

      <a href={path}>
        <button type="button">Back</button>
      </a>
    </div>
  );
};

export default DetailedView;
