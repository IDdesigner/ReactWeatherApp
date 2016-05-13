var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About component</h3>
//     )
//   }
// });


// Stateless Functional Component of above code
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Hello, welcome to the about page.</p>
    </div>
  )
};

module.exports = About;
