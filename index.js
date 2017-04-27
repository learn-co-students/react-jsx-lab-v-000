const React = require('react');
const ReactDOM = require('react-dom');

import RegistrationForm from './components/RegistrationForm'
import Webpage from './components/Webpage'
// const RegistrationForm = require('./components/RegistrationForm');
// const Webpage = require('./components/Webpage');

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
