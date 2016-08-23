import React from 'react';
import classNames from 'classnames';

const Home = React.createClass({
  render() {
    const styleMainDiv = {
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

    const styleFlexMain = {
      marginBottom: '50px'
    };

    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    const styleSecondDiv = {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'nowrap'
    };

    const stylePackageImg = {
      height: '20em',
      width: '30em'
    };

    const stylePackageImg2 = {
      height: '100%',
      width: '40em'
    };

    const styleSecondDivText = {
      fontSize: '1.7em',
      paddingLeft: '1vw',
      paddingRight: '1vw'
    };

    return <div>
      <div style={styleMainDiv}>
        <div className="title" style={styleFlexMain}>Lorem Ipsum</div>
        <input
          className={lrgBtnClassNames}
          style={styleFlexMain}
          type="button"
          value="Place An Order"
        />
      </div>
      <div className="secondDivColor" style={styleSecondDiv}>
        <div className="packageImg">
          <img
            src="./packages.png"
            style={stylePackageImg}
          />
        </div>
        <div style={styleSecondDivText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean odio nisl, mattis et ipsum et, efficitur condimentum lorem.
          Mauris convallis iaculis nunc, nec elementum augue semper quis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Praesent lacinia sem quis elit sollicitudin,
          id vestibulum lorem laoreet.
        </div>
      </div>
      <div className="thirdDivColor" style={styleSecondDiv}>
        <div style={styleSecondDivText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean odio nisl, mattis et ipsum et, efficitur condimentum lorem.
          Mauris convallis iaculis nunc, nec elementum augue semper quis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Praesent lacinia sem quis elit sollicitudin,
          id vestibulum lorem laoreet.
        </div>
        <div>
          <img
            src="./supporting-blocks.png"
            style={stylePackageImg2}
          />
        </div>
      </div>
    </div>;
  }
});

export default Home;
