import { render } from '@testing-library/react';
import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      urls: '',
      methods: '',
    };
  }

  //export default function Form(props) {

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
      urls: e.target.url.value,
      methods: e.target.method.value,
    });

    this.props.updateResults({ ...this.state });
  }

  render() {
    return (
      <section className="App-form">
        <form onSubmit={this.handleSubmit} >

          <label>URL:</label>
          <input className="input-text" name="url" type='text' />
          <button type="submit" >Go!</button>
          <div className="button-holder">
            <div className="ck-button">
              <label>
                <input name="method" type="radio" value="GET" />
                <span>GET</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input name="method" type="radio" value="POST" />
                <span>POST</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input name="method" type="radio" value="PUT" />
                <span>PUT</span>
              </label>
            </div>
            <div className="ck-button">
              <label>
                <input name="method" type="radio" value="DELETE" />
                <span>DELETE</span>
              </label>
            </div>
          </div>
        </form >
      </section>
    );

  }
}
export default Form;
