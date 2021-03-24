import React from 'react';
import './form.scss';

export default function Form(props) {

  async function handleSubmit(e) {
    e.preventDefault();

    //props.updateResults(e.target);

    const request = await fetch(e.target.url.value);
    const data = await request.json();

    let urlData = data.results.map(urlData => urlData);
    props.updateResults(urlData);

  }
  return (
    <section className="App-form">
      <form onSubmit={handleSubmit} >

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
  //}
}
//export default Form;
