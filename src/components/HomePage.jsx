import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '../operations/startGame';
import { flipCard  } from '../operations/flipCard';

import DisplayCard from './DisplayCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { cardFlipped, cardArray, defuseCardNumber, res } = useSelector(state => state.card);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  const handleFlipCard = () => {
    dispatch(flipCard());
  };

  return (
    <div className="container mx-auto mt-10 text-slate-900 w-11/12 max-w-xl ">
        <div className='text-2xl font-semibold text-green-600 p-5 -mt-5 underline rounded-md w-80 mx-auto'>
            Exploding Kitten Game
        </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 sm:col-span-3"></div>
        <div className="col-span-12 sm:col-span-12">
          <DisplayCard cardContent={cardFlipped} cardRemaining={cardArray.length} defuseCardNumber={defuseCardNumber} res={res} />
        </div>
        <div className="col-span-3 sm:col-span-3"></div>
        <div className="col-span-3 sm:col-span-3"></div>
        <div className="col-span-12 sm:col-span-12 mt-4">
          <button className="w-1/2 bg-green-500 hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 rounded" onClick={handleFlipCard}>
            Flip
          </button>
        </div>
        <div className="col-span-3 sm:col-span-1"></div>
      </div>
    </div>
  );
};

export default HomePage;



// import React from 'react'

// const HomePage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default HomePage



