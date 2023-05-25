//import { useSelector } from 'react-redux';
import './App.css';
import Login from './Login';


function App() {
  //const user = useSelector(selectUser);

  return (
      <div className="App">
        <div className="content">
          <Login />           
        </div>
      </div>
  );
}

export default App;
