import {useEffect,useState} from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your pasions"}
]
const [heroCount,setHeroCount]=useState(0);
const [playStatus,setPlayStatus]=useState(false);

useEffect(()=>{   // with an empty dependency array []. This means that the effect will only run once, similar to the componentDidMount lifecycle method in class components. The empty dependency array indicates that the effect does not depend on any props or state, so it will not need to re-run if any props or state change.
  setInterval(()=>{
    setHeroCount((count) => { return count=== 2 ? 0 : count+1 } )
  },3000);
},[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>  
      <Navbar></Navbar>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />

    </div>
  )
}

export default App; 
