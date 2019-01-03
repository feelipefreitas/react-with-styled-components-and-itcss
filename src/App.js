import React from 'react';

import GlobalStyles from "./styles";
import CourseCard from './components/CourseCard';

const App = () => (
    <React.Fragment>
        <GlobalStyles />
        <CourseCard name="React with Redux" price="U$100" description="All about react and redux" />
    </React.Fragment>
);

export default App;