import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <HomePage/>
      </Provider>
    </div>
  );
}

export default App;
