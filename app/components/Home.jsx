import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

const Home = React.createClass({
  handleActionButtonTouchTap() {
    this.props.router.push('/order');
  },

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
        <div className="title" style={styleFlexMain}>Overnight Aid</div>
        <input
          className={lrgBtnClassNames}
          onTouchTap={this.handleActionButtonTouchTap}
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
          When disaster Strikes, we Strike back.  If you have had an Emergency, we will ship you a week's supplies so you can fill your basic needs.
        </div>
      </div>
      <div className="thirdDivColor" style={styleSecondDiv}>
        <div style={styleSecondDivText}>
          Whether you've lost your home to a fire, flood, or just need to get out fast... we're there for you.  Tomorrow. Guaranteed. We ship everything in one week quantities to make things simple for you.  We offer: Food, Clothing, Baby and pet supplies and even a makeup kit.
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

export default withRouter(Home);
