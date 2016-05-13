var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//
//         <h3>It's {temp} in {location}</h3>
//
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (

      <h3 className="text-center">It's <strong>{temp}</strong> in <strong>{location}</strong></h3>

  )
}

module.exports = WeatherMessage;
