import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import mui from 'material-ui';
import theme from '../config/theme';

export default function withMaterialUI(ComposedComponent) {
  return class MaterialUI {
    /*
     For more details: https://github.com/callemall/material-ui#usage
     Pass material-ui theme through child context
     We are doing this here so we don't have to do it anywhere else.
     */
    static childContextTypes = {
      muiTheme: React.PropTypes.object
    }

    getChildContext() {
      const ThemeManager = new mui.Styles.ThemeManager();
      ThemeManager.setTheme(theme);

      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    render() {
      let { context, ...other } = this.props; // eslint-disable-line no-unused-vars
      return <ComposedComponent {...other} />;
    }
  };
}