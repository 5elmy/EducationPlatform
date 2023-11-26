import React from 'react';
import { Card } from 'antd';
import img from "../../Artboard 18.png"
const { Meta } = Card;
const CardLecture= ({title, description}) => (
  <Card
    hoverable
    className='w-full'
    cover={<img alt="example" src={img}  className='w-full'/>}
  >
    <Meta title={title} description={description} />
  </Card>
);
export default CardLecture;