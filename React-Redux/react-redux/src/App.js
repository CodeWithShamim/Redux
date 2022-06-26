import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getTodos from "./services/actions/todosAction";

function App() {
  const { todos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  console.log(todos);

  return (
    <div className="App">
      <h1>Todos: </h1>
      {isLoading && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;

// step1: intall packages
//- redux
//- react-redux
//- axios
//- redux-thunk
// step2: constants define
// step3: async action creator
// step4: create reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: dispatch
