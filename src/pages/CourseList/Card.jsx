import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({img,companyName ,des , id}) => {
//   const navigate = useNavigate()
  
  return (
    <div
      onClick={() => navigate("/detail/" + id)}
      className="mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60"
    >
      <img
        className="aspect-video rounded-t-2xl object-cover object-center"
        src={img}
      />
      <div className="p-4">
        <small className="text-blue-400 text-xs">Automobile company</small>
        <h1 className="text-2xl font-medium text-slate-600 pb-2">
          {companyName}
        </h1>
        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
          {des}
        </p>
      </div>
    </div>
  );
}

export  {Card}
