import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import { ShowDb } from './components/ShowDb';


function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route exact path='/'>
            <Route exact path='/' element={<Form/>}/> 
            <Route exact path="showdb">
                <Route index element={<ShowDb />} />
              </Route> 
          </Route>
        </Routes>

    </div>
  );
}

export default App;
