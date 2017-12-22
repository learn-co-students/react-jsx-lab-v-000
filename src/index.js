import React from 'react';
import ReactDOM from 'react-dom';

import 'core-js/es6/map';
import 'core-js/es6/set';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('global')
);
