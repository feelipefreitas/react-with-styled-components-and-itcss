import React from 'react';

import Colors from './settings/colors';
import Radious from './settings/radious';
import Spaces from './settings/spaces';
import Generic from './generic';

const GlobalStyles = () => (
    <React.Fragment>
        <Generic />
        <Colors />
        <Radious />
        <Spaces />
    </React.Fragment>
);

export default GlobalStyles;