import './App.css';
import {useEffect, useState, UseState} from 'react';
import axios from 'axios';
import AnswerCard from './components/AnswerCard';
import HintCard from './components/HintCard';
import Button from './components/Button';
import Navbar from './components/Navbar';
import randomizeArray from './utils';

function App() {
  const [puns,setPuns]= useState([]);
  const [reveal,setReveal]=useState(false);
  const [currentDetailLevel,setCurrentDetailLevel] = useState(0);
  const [currentItem,setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect( () => {
    axios.get("https://script.google.com/macros/s/AKfycbzBO3G-Gjx5Il1gXkBolGjbGu1LMwv59NjKaQlogXcr4NrSwxrgWh6ycINNHP7OX3I/exec")
      .then(response => setPuns(randomizeArray(response.data)))
      .catch(error=>console.log(error))
  },[]);

  const handleNextPunClick = (e) => {
    e.preventDefault();
    if(reveal) setReveal(false);
    setCurrentDetailLevel(0);
    setCurrentItem(currentItem+1);
  }
  const handleNextHintClick = (e) => {
    e.preventDefault();
    setCurrentDetailLevel(currentDetailLevel+1);
  }
  const handleRevealClick = (e) => {
    e.preventDefault();
    setReveal(true);
  }
  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu} />
      <div className='h-full flex flex-col'>

        {
          puns.length > 0 &&
          <div>
            {
              !reveal &&
              <AnswerCard title={""} style='m'/>
            }
            {
              reveal &&
              <AnswerCard title={puns[currentItem].pun} style='m'/>
            }
              {puns[currentItem].hints && puns[currentItem].hints.filter(hint=>hint).map((hint,i)=>{
                if (currentDetailLevel >= i ) return <HintCard hint={hint}/>
                else return ""
              })}
            </div>
        }
        <div class='flex flex-col gap-5 w-[min(300px,80%)] m-auto items-center'>
          <div class='flex flex-row  gap-5 justify-between align-center'>
            {puns[currentItem] && puns[currentItem].hints && puns[currentItem].hints[currentDetailLevel+1] && <Button onClick={handleNextHintClick} label="Autre Indice" styleType='secondary'/>}
            <Button onClick={handleRevealClick} label="Langue au chat" styleType='primary'/>
          </div>
            <Button onClick={handleNextPunClick} label="Change moi cette merde" styleType='danger'/>
        </div>
      </div>
    </div>
  );
}

export default App;
