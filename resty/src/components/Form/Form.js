import React from 'react';
import './form.scss';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      methods: [],
    };
    //this.addUrl = this.addUrl.bind(this);
  }

  // addUrl() {
  //   this.setState({
  //     url: [...this.state.url, ''],
  //     input: '',
  //   });
  // }
  addUrlWithImplicitBinding = () => {
    this.setState({
      urls: [...this.state.urls, this.state.input],
      methods: [...this.state.methods, this.state.method],
    });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  }
  handleMethodChange = (e) => {
    console.log(e.target.value);
    this.setState({ method: e.target.value });
  }


  render() {
    return (
      <section className="App-form">
        <form >

          <label>URL:</label>
          <input className="input-text" onChange={this.handleChange} type='text' value={this.state.input} />
          <button type="button" onClick={this.addUrlWithImplicitBinding}>Go!</button>
          <div className="button-holder">
            <div className="ck-button">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input onChange={this.handleMethodChange} name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>

        </form >
        <article>
          <ul className="methods-list">
            {this.state.methods.map((method) => <li> {method}</li>)}
          </ul>
          <ul className="url-list">
            {this.state.urls.map((url) => <li> {url}</li>)}
          </ul>

        </article>
      </section>
    );
  }

}
export default Form;
