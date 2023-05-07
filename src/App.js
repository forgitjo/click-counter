import './App.css';
import { Component } from 'react';
import Counter from './components/counter';

class App extends Component{
  render (){
    return(
      <div className='text' >
        <h1>Alhamdulillah</h1>
        <Counter/>
      </div>
    )
  };
}

export default App;
