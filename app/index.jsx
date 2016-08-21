import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'components/Routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import App from 'components/App';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  flatButton: {
    textColor: 'honeydew',
    buttonFilterColor: '#1AC8ED'
  },
  palette: {
    primary1Color: '#ACACDE'
  }
});

// const muiTheme = getMuiTheme({
//   flatButton: {
//     textColor: 'white',
//     buttonFilterColor: red100
//   },
//   palette: {
//     primary1Color: red500
//   }
// })

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes />
  </MuiThemeProvider>,

  document.getElementById('app')
);
