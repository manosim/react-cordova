var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className='homepage'>
        <div className='bar bar-header bar-positive'>
          <button className="button">About</button>
          <h1 className='title'>bsssar-positive</h1>
          <button className="button">Edit</button>
        </div>
      </div>
    );
  }
});

module.exports = Home;
