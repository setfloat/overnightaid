import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import classNames from 'classnames';

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
      fontSize: '20px',
      textAlign: 'right'
    };

    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    return <div style={styleDiv}>
      <div style={styleFlex}>Lorem Ipsum</div>
      <input type="button" className={lrgBtnClassNames}  value="Place An Order" />
    </div>;
  }
});

export default Home;
