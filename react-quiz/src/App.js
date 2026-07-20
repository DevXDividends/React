import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
const initial_state = {
  questions: [],
  // 'loading' 'error' 'ready' 'active' 'finished'  
  status: "loading",
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
  }

}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initial_state);

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
        <p> 1/15</p>
        <p>Question ?</p>
      </Main>
    </div>
  );
}
