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

    const styleFlex = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'nowrap',
      marginBottom: '50px'
    };

    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    return <div style={styleDiv}>
      <div className="title" style={styleFlex}>Lorem Ipsum</div>
      <input
        className={lrgBtnClassNames}
        style={styleFlex}
        type="button"
        value="Place An Order"
      />
    </div>;
  }
});

export default Home;
