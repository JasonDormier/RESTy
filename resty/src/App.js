import React from 'react';
import './App.scss';
//import request from 'superagent';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import Results from './components/Results/Results.js';
import Footer from './components/Footer/Footer.js';
import History from './components/History/History.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      body: [],
      urls: [],
      methods: [],
      headers: {},
      history: [],
      count: 0,
      isLoading: false,
    };
  }

  updateResults = async (userData) => {
    this.setState({
      isLoading: true,
      urls: [...this.state.urls, userData.urls],
      methods: [...this.state.methods, userData.methods],
    });
    console.log(this.state.urls);
    console.log(this.state.methods);

    let request = await fetch(userData.urls,
      { methods: userData.methods });

    const data = await request.json();

    let userDataStuff = {
      url: userData.urls,
      method: userData.methods,
      body: data,
    };

    let updateHistory = [...this.state.history, userDataStuff];

    localStorage.setItem('queryHistory', JSON.stringify(updateHistory));

    await this.setState({
      body: data,
      isLoading: false,
      history: updateHistory,
    });
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('queryHistory')) || [];
    this.setState({ history });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Form updateResults={this.updateResults} />
          <History history={this.state.history} />
          <If condition={this.state.isLoading}>
            <Then>
              {console.log(this.state.isLoading)}
              <h2>Loading...</h2>
            </Then>

            <Else>
              <Results data={this.state} />
            </Else>
          </If>
        </main>
        <Footer />
      </div >
    );
  }

}
export default App;
