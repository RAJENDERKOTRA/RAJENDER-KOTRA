import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Provider } from 'react-redux';
import store from './Redux/store';
import Async from './Redux/Async/AsyncOprations';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Async store={store}></Async>
        {/* <ClothContainer></ClothContainer> */}
      </div>

    </Provider>



  );
}

export default App;
