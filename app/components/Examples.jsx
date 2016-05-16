var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples component</h3>
//     )
//   }
// })

// Stateless Functional Component of above code
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Santa%Cruz,CA">Santa Cruz, CA</Link>
        </li>
        <li>
          <Link to="/?location=Palo%Alto,CA">Palo Alto, CA</Link>
        </li>
        <li>
          <Link to="/?location=San%Francisco,CA">San Francisco, CA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
