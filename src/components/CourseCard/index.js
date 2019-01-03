import React from 'react';

import Card from '../../styles/components/card';
import Name from '../../styles/objects/name';
import Price from '../../styles/objects/price';
import Description from '../../styles/objects/description';

import CourseButtom from '../CourseButtom';

const CourseCard = props => {
    return (
        <Card>
            <Name>{ props.name }</Name>
            <Price>{ props.price }</Price>
            <Description>{ props.description }</Description>
            <CourseButtom text="BUY"></CourseButtom>
        </Card>
    );
};

export default CourseCard;