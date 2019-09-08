import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';

ReactDOM.render(
  (
    <div>
      <Webpage />
      <RegistrationForm />
    </div>
  ),
  document.getElementById('global')
);
