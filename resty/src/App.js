import React from 'react';
import './App.scss';

import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Results from './components/Results/Results.js';
import Footer from './components/Footer/Footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      // methods: [],
    };

  }

  updateResults = (data) => {
    console.log('data on app: ', data);
    this.setState({
      urls: [...this.state.urls, ...data],
      //ethods: [...this.state.methods, data.method.value],
    });

    console.log('this is the array: ', this.state.urls);
    //console.log(this.state.methods);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults} />
        <Results data={this.state} />
        <Footer />
      </div>
    );
  }

}
export default App;
