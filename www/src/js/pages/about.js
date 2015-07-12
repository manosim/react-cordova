var React = require('react');
var Router = require('react-router');

var AboutPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  render: function () {
    return (
      <div className='about-page'>
        <div className='bar bar-header bar-positive'>
          <button className="button button-icon ion-chevron-left" onClick={this.goBack} />
          <h1 className='title'>About the project</h1>
        </div>
      </div>
    );
  }
});

module.exports = AboutPage;
