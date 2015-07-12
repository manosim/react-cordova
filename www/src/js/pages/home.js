var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div className='homepage'>
        <div className='bar bar-header bar-positive'>
          <button className="button">About</button>
          <h1 className='title'>bar-positive</h1>
          <button className="button button-icon ion-ionic" />
        </div>
      </div>
    );
  }
});

module.exports = Home;
