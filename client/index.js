var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Welcome = require('./Welcome');
var Cookies = require('./Cookies');
var Bears = require('./Bears');
var FishApp = require('./FishApp');
var Beers = require('./Beer');
var FunWithSass = require('./FunWithSass');
var Notifier = require('./Notifier');

require('./stylesheets/main.scss');

var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'welcome'
    }
  },
  setActiveComponent: function(componentName) {
    console.log("Found Comp: ", componentName);
    this.setState({
      activeComponent: componentName
    })
  },
  showWhichComponent: function() {
    switch(this.state.activeComponent) {
        case 'welcome':
            return <Welcome/>
            break;
        case 'bears':
            return <Bears/>
            break;
        case 'fish':
            return <FishApp/>
            break;
        case 'beer':
            return <Beers/>
            break;
        case 'cookies':
            return <Cookies/>
            break;
        case 'sass':
            return <FunWithSass/>
            break;
        default:
            return <Welcome/>
    };
  },
  render: function() {
    return (
      <div>
        <Notifier>
          <NavBar setActiveComponent={ this.setActiveComponent }/>
            <div>
              { this.showWhichComponent() }
            </div>
          <Footer/>
        </Notifier>
      </div>           
      )
  }
});

ReactDOM.render(<App />, document.getElementById('app')
);
