var React = require('react');
var Router = require('react-router');

var AboutPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  goHome: function () {
    this.transitionTo('home');
  },

  render: function () {
    return (
      <div className='about-page'>
        <header className="bar bar-nav">
          <button className="btn btn-link btn-nav pull-left" onClick={this.goHome}>
            <i className="fa fa-chevron-left"></i> Back
          </button>
          <h1 className="title">React Cordova</h1>
        </header>
      </div>
    );
  }
});

module.exports = AboutPage;
