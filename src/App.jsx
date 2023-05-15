import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Roger Oliveira"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
    </div>
  );
}

export default App;
