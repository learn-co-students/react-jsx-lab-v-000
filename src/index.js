import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';
// import FillerText from './components/FillerText';  Not really necessary here as already called in Webpaga.js

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('global')
);
