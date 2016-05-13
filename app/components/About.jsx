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
      <h1 className="text-center">About</h1>
      <p>Hello, and welcome. This is my first comprehensive React web app. There's been a ton to learn and it's certanily been enjoyable. Keep checking back to see what updates I make. Cheers, ~R</p>
      <p>Here are some of the tools I used in building this project:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was built with React. A framework developed at Facebook!
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - API to access weather around the world.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">Foundation</a> - An awesome CSS framework to provide styling.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
