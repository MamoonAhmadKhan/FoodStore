import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Cart = () => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className='flex flex-col items-center content-center w-full h-full mt-50 mb-50'>
        <h1 className='text-2xl font-bold'>Looks like you are Offline ?</h1>
        <h1 className='text-2xl font-bold'>Check your Internet Connection !!</h1>
      </div>
    )
  }

  return (
    <>
    
    </>
  )
}

export default Cart