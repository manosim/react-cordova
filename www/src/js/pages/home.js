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
        <header className="bar bar-nav">
          <button className="btn btn-link btn-nav pull-left" onClick={this.goAbout}>
            About
          </button>
          <h1 className="title">React Cordova</h1>
        </header>
      </div>
    );
  }
});

module.exports = Home;
