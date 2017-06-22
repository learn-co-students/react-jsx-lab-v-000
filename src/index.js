import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import FillerText from './components/FillerText';
import Webpage from './components/Webpage';


ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <FillerText />
      <Webpage />
    </div>
  ),
  document.getElementById('root')
);