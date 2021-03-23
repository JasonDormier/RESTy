import React from 'react';
import './App.scss';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Footer from './components/Footer/Footer.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }

}
export default App;
