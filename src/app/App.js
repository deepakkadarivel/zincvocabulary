import React, { Component } from 'react';
import './App.css';
import PassageContainer from '../components/Passage/PassageContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../appStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <PassageContainer />
            <PassageContainer />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
