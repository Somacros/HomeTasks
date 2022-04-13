import * as React from 'react';
import TitleBase from './TitleBase.styled';

interface ITitle {
    children?: string;
    color?: string;
}

export const Title = ({
    children,
    color
}: ITitle) => {
    console.log('Hola');
    return(
        <TitleBase color={color}>{children}</TitleBase>
    )
};

export default Title;