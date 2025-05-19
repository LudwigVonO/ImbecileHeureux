import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AnswerCard from './components/AnswerCard';
import HintCard from './components/HintCard';
import Button from './components/Button';
import Navbar from './components/Navbar';
import randomizeArray from './utils';
import CategorySelector from './components/Select';

function App() {
  const [puns,setPuns]= useState([]);
  const [selectedCategories,setSelectedCategories] = useState(['Tout']);
  const [reveal,setReveal]=useState(false);
  const [currentDetailLevel,setCurrentDetailLevel] = useState(0);
  const [currentItem,setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const categoryOptions = ['Sport','Musique','Autre','Politique','Marques','Histoire','Littérature','Antique','Cinéma','Art','Célébrités','Tout'];

  function filterPuns () {
    console.log(puns)
    const filteredPuns = puns.filter((pun)=>pun.category.reduce((acc,category) =>{
      console.log()
      if(selectedCategories.includes(category)) return true ; 
    },false))
    return filteredPuns
  }

  useEffect( () => {
    setPuns(filterPuns(puns));
  },[selectedCategories])

  useEffect( () => {
    axios.get("https://script.google.com/macros/s/AKfycbx3su65lCOj-JcW5U7dBJxl5IhAMmCb_yLAzyQ-j9guI5nZ8LRwzxRBQSg9IgVoCXQ/exec")
      .then(response => {
        setPuns(randomizeArray(response.data));        
      })
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
    <div className={`App flex flex-col ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-400"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu} isDarkMode={isDarkMode}/>
      <div className='flex flex-col max-w-[80%] self-center mainContainer'>
        <CategorySelector selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} categoryOptions={categoryOptions} />
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
        <div class='flex flex-col md:flex-row gap-5 w-[min(300px,80%)] m-auto items-center'>
          <div class='flex flex-row  gap-5 justify-between align-center'>
            <Button onClick={handleNextHintClick} label="Autre Indice" styleType='secondary' isDisabled={!puns[currentItem] || !puns[currentItem].hints || !puns[currentItem].hints[currentDetailLevel+1]}/>
            <Button onClick={handleRevealClick} label="Langue au chat" styleType='primary' isDisabled={reveal}/>
          </div>
            <Button onClick={handleNextPunClick} label="Prochaine Enigme" styleType='danger'/>
        </div>
      </div>
    </div>
  );
}

export default App;
