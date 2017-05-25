import React, {Component} from 'react';
import {Router, browserHistory} from 'react-router';
import routes from '../routes';

class AppRoutes extends Components {
  render() {
    return (
      <Router 
        history={browserHistory}
        routes={routes}
        onUpdate={ () => window.scrollTo(0, 0)} 
      />
    );
  }
}
export default AppRoutes;