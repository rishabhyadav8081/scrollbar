import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // how much we scrolled
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // total scrollable height
      const scrolled = (scrollTop / docHeight) * 100;
     
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

    //on button click 

       <div className='bar'>
       <div className='percentage' style={{
        width:`${count}%`
       }}>
         {count}%
       </div>  
       </div>
       <button  onClick={()=>{setCount((prev)=>prev+10)}} disabled={count >= 100}>+</button>
       <button  onClick={()=>{setCount((prev)=>prev-10)}} disabled={count <=0}>-</button>



       {/* on scroll */}

       <div className="bar" style={{ position: "fixed", top: 10, left: 0, width: "100%", height: "10px", backgroundColor: "#eee" }}>
        <div
          className="percentage"
          style={{
            width: `${scrollPercentage}%`,
            height: "100%",
            backgroundColor: "skyblue",
            transition: " .1s"
          }}
        ></div>
      </div>

      {/* Content to scroll */}
      <div style={{ height: "2000px", padding: "20px" }}>
        Scroll down to see the progress bar in action
      </div>
    </>
  )
}

export default App
