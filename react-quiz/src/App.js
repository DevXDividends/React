import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initial_state = {
  questions: [],
  // 'loading' 'error' 'ready' 'active' 'finished'  
  status: "loading",
  index:0
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
    default:
      throw new Error("Action Unknown");
    case "dataFailed":
      return {
        ...state,
        status: "error"
      }
      case "start":
        return {
          ...state,
          status:"active"
        }
  }

}
export default function App() {
  const [{ questions, status,index}, dispatch] = useReducer(reducer, initial_state);
  
  const numQuestions = questions.length;

  useEffect(function () {
    async function loadData() {
      try {
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok)
          throw new Error("Failed to load data ");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data })
      }
      catch (err) {
        dispatch({ type: "dataFailed", payload: "Erroe while receiving data" })
      }
    }
    loadData();
  }, [])

  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions= {numQuestions} dispatch={dispatch}/>}
        {status === 'active' && <Question question = {questions[index]}/>}
      </Main>
    </div>
  );
}
