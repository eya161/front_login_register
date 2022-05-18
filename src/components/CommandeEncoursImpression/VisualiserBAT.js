import React from 'react';
import { useParams } from 'react-router-dom';


export default function Visualisergraph() {
    const { id } = useParams();
  return (
    <img src={`https://127.0.0.1:8000/api/getbat/${id}`}/>
  )
}