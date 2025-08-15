import User from '../components/User';
import useOnlineStatus from '../hooks/useOnlineStatus';

const About = () => {
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
        <h1 className="font-bold text-5xl text-center m-10 mb-20">ABOUT US</h1>
        <User />
    </>
  )
}

export default About