import React from 'react';
import { Pie } from '@ant-design/charts';

const PieChart: React.FC = () => {
  const data = [
    {
      type: '27%',
      value: 27,
    },
    {
      type: '25%',
      value: 25,
    },
    {
      type: '18%',
      value: 18,
    },
    {
      type: '14%',
      value: 14,
    },
    {
      type: '16%',
      value: 16,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '$5000',
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
