import * as React from "react";
import { ButtonHTMLAttributes, FC } from "react";
import styled, { css, StyledComponent } from 'styled-components';
import ButtonBase from './ButtonBase.styled';


interface IButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: string | React.ReactNode; // make the component able to receive children elements
    color?: string; // two styling options (you can create as many as you want)
    disabled?: boolean; // make the button disabled or not
    background?: string;
}

export const Button = ({
    onClick,
    children,
    color = "white",
    disabled,
}: IButton) => {
    return (
        <ButtonBase color={color}>{children}</ButtonBase>
    )
}

export default Button;