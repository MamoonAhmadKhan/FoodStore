import React from "react"
import useOnlineStatus from "../hooks/useOnlineStatus";

const Auth = () => {
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

export default Auth