import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* In this example project, we can see the advantage of separating shared data 
for componenets in its own file, so they can be referenced by each. Like in this
example, you may have a navbar and a sidebar with links to the same pages. Its
would be difficult or tedius to create specific re-usable componenets for each, 
as the structure and style may be different, but the text and links may all be
the same. So, we put all the shared data into data.js and reference it in each
component. */