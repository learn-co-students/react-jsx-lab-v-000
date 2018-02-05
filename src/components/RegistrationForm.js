import React from 'react'
 import PropTypes from 'prop-types'

 class RegistrationForm extends React.Component {
   render() {
     return (
       <form>
         <input type="text"/>
         <input type="password"/>
         <button type="submit">Submit</button>
       </form>
     );
   }
 }

 export default RegistrationForm;
