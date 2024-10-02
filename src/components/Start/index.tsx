import { useMainContext } from "../../context/mainContext";

import Arrows from "../../assets/images/arrows.png";

import styles from "./styles.module.scss";

export default function StartModel()
{ 
  const {startGame,docRef} = useMainContext(); 
  
  const startHandle=()=> { 

   startGame();
   docRef.current.focus();

  };

  return (
    <div className={styles.container}> 
    
    <h1>MR KIKSY SNAKE GAME <br></br> SHALL WE PLAY?</h1>
    <p> To move, use the keys</p>
    <img src={Arrows} width="180" alt="use the Up, Down,Left, Right Keys"/>
    

    <button onClick={startHandle}> Start   </button>

    
    </div>
  );



}