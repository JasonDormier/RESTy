import React from 'react';
import './results.scss';


export default function Results(props) {
  // render() {
  return (

    <article>
      <ul className="methods-list">
        {props.data.urls.map((data, index) => <li key={index}> {data.name}</li>)}
      </ul>
      <ul className="url-list">
        {props.data.urls.map((data, index) => <li key={index}> {data.url}</li>)}
      </ul>

    </article>
  );
  // }
}
//
//{props.data.map((url) => <li> {url}</li>)}
//export default Results;