import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App bg-color red">
      <Navbar>

      </Navbar>
      <div className="content">
        <Home>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Vero dolore cumque dignissimos fugiat aliquid! Quis temporibus reiciendis at velit amet unde, necessitatibus,
          ullam cum corrupti accusantium blanditiis in, sapiente quo?
        </Home>
      </div>
    </div>
  );
}

export default App;
