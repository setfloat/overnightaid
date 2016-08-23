import AddOns from 'components/AddOns';
import FamilySize from 'components/FamilySize';
import Items from 'components/Items';
import React from 'react';

const Catalog = React.createClass({
  render() {
    return <div>
      <FamilySize />
      <Items />
      <AddOns />
    </div>;
  }
});

export default Catalog;
