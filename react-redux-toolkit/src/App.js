import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    // update 
    <div className="App">
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
