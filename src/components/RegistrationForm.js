import React from 'react';

class RegistrationForm extends React.Component {
    render() {
        return (
            <form>
                <input type = 'text'></input>
                <input type = 'password'></input>
                <button type = 'submit'></button>
            </form>
        );
    }
} 

export default RegistrationForm;

// class Tweet extends React.Component {
//   render() {
//     return (
//       <div className="tweet">
//         <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
//         <div className="tweet__body">
//             <p>We are writing this tweet in JSX. Holy moly!</p>  
//         </div>
//       </div>
//     );
//   }
// }