import {useState, useEffect} from 'react';

const useWindow = () => {

  const [SmallScreen, setSmallScreen] = useState(window.innerWidth < 800 ? true : false)

  const handleResize = () => {
    if ( window.innerWidth < 800) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }

  

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [])

  return SmallScreen;

}

export default useWindow;
