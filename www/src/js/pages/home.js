var React = require('react');
var Router = require('react-router');

var Home = React.createClass({
  mixins: [
    Router.Navigation
  ],

  goAbout: function () {
    this.transitionTo('about');
  },

  render: function () {
    return (
      <div className='homepage'>
        <div className='bar bar-header bar-positive'>
          <button className="button" onClick={this.goAbout}>About</button>
          <h1 className='title'>React Cordova</h1>
          <button className="button button-icon ion-ionic" />
        </div>
      </div>
    );
  }
});

module.exports = Home;
