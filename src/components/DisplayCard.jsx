import React from 'react';

const DisplayCard = ({ cardContent, cardRemaining, res, defuseCardNumber }) => (
  <div className=" bg-green-300 shadow-md rounded-md p-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-lg font-bold">{cardContent}</h2>
      </div>
      <div className="col-span-2 sm:col-span-1 flex justify-between">
        <p className=" text-base font-semibold">Cards Left: {cardRemaining}</p>
        <p className="text-base font-semibold">Defuse: {defuseCardNumber}</p>
      </div>
      <div className="col-span-2">
        <p className="text-base font-semibold">{res}</p>
      </div>
    </div>
  </div>
);

export default DisplayCard;
