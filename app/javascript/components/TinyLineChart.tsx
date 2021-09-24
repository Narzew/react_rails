import React from 'react';
import { TinyLine } from '@ant-design/charts';

const DemoTinyLine: React.FC = () => {
  const data = [2, 50000, 2, 100000, 1, 200000, 2, 200];
  const config = {
    height: 200,
    width: 200,
    autoFit: false,
    data,
    smooth: false,
  };
  return <TinyLine {...config} />;
};

export default DemoTinyLine;
