import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Home = React.createClass({
  render() {
    const styleDiv = {
      backgroundImage: 'url(support.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'nowrap'
    };

    const styleRaisedButton = {
      display: 'flex',
      height: '50px',
      width: '150px'
    };

    const styleFlex = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'nowrap',
      marginBottom: '50px',
      fontSize: '6em',
      // color: 'white'
    };

    const styleRaisedButtonLabel = {
      paddingTop: '100px',
      fontSize: '20px',
      textAlign: 'right'
    };

    return <div style={styleDiv}>
      <div style={styleFlex}>Lorem Ipsum</div>
      <RaisedButton label="Place An Order" primary={true}
      labelStyle={styleRaisedButtonLabel} style={styleRaisedButton} />
    </div>;
  }
});

export default Home;
