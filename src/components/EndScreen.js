import React , {useContext} from "react";
import {QuizContext} from '../Helpers/Context';
import "../App.css";
import {Questions} from "../Helpers/QuestionBank"

const EndScreen = () => {
    const {setGameState,score,setScore} = useContext(QuizContext);
  return (
    <div>
        <h1>Quiz Finished</h1>
        <h3>{score}/{Questions.length}</h3>
        <button onClick={()=>{
            setGameState("menu");
            setScore(0);
        }}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen;