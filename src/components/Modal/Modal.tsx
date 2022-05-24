import styled, {css} from "styled-components";
import * as React from 'react';
import { ifProp, switchProp } from "styled-tools";
import Button from "../Button/Button.styled";
import RedCalendar from './calendar-red.png';
import RedDownArrow from '../Select/red_down_arrow.png';
import WhiteCross from '../../icons/cross-white.png';
import RedCheck from '../../icons/red-check.png';
import { useDispatch, useSelector } from "react-redux";
import { setIsAddingMovie } from "../../store/movie/action";
import { RootState } from "../../store/root-reducer";

interface IModalContent {
    kind?: string;
}

interface IModalOverlay {
    kind?: string;
}

const ModalOverlay = styled.div.attrs((props:IModalOverlay) => ({
    kind: props.kind
}))`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    font-family: 'Montserrat', sans-serif;

    ${switchProp("kind", {
        secondary: css`
            align-items: start;
            padding-top: 15%;
        `
    })}
`;

const ModalContent = styled.div.attrs((props: IModalContent) => ({
    kind: props.kind
}))<IModalContent>`
    width: 70%;
    background-color: #232323;
    padding: 0em 2em 1em 2em;

    ${switchProp("kind", {
        secondary: css`
            justify-content: center;
            align-items: center;
            width: 50%;
        `
    })}
`;

const ModalHeader = styled.div`
    text-align: center;
`;

const ModalBody = styled.div`
    text-align: center;
`;

const ModalFooter = styled.div`
    padding: 0em 1em;
    display: flex;
    flex-flow: row wrap;
    justify-content: right;
    button {
        margin: 0px 5px;
    }
`;

const ModalCloseButton = styled.img.attrs({
    src: `${WhiteCross}`
})`
    width: 4%;
    position: relative;
    top: 0.5em;
    margin-left: 95%;
    cursor: pointer;
`;

const ModalCheckIcon = styled.img.attrs({
    src: `${RedCheck}`
})`
    width: min(10%, 90px);
    height: auto;
`;

const ModalTitle = styled.h4`
    margin: 1em 0em;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 2em;
    font-weight: bolder;
`;

const ModalBodyText = styled.p`
    color: white;
    font-size: 1em;
    font-weight: bolder;
`;

const FormRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    width: 100%;
`;

const FormInputItem = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: min(48%, 700px);
    margin: 0px 10px 20px 0px;
`;

const FormInputItemSecondary = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: min(48%, 700px);
    margin: 0px 10px 0px 0px;
`;

const FormLabel = styled.label`
    color: #F65261;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
`;

const FormInput = styled.input`
    background: #2e2e2e;
    border: 0;
    outline: 0;
    border-radius: 2px;
    padding: 0.5em 1em;
    color: white;
    font-size: 1.1em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    width: 100%;

    ::-webkit-calendar-picker-indicator {
        background: url(${RedCalendar}) center/90% no-repeat;
    }

    &:hover {
        ${switchProp("type", {
            text: css`
                cursor: text;
            `
        }, css` cursor: pointer; `)}
    }
`;

const SelectInput = styled.select`
    background-color: #2e2e2e;
    border: 0;
    outline: 0;
    border-radius: 2px;
    padding: 0.5em 1em;
    color: white;
    font-size: 1.1em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    width: 100%;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url(${RedDownArrow});
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: 1.2em auto, 100%;

    &:hover {
        cursor: pointer;
    }
`;

const TextAreaInput = styled.textarea.attrs({
    rows: 6,
    placeholder: "Movie description"
})`
    background-color: #2e2e2e;
    border: 0;
    outline: 0;
    border-radius: 2px;
    padding: 0.5em 1em;
    color: white;
    font-size: 1.1em;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    resize: none;
`;

const ErrorMessage = styled.label`
    color: #F65261;
    font-size: 0.6em;
    font-weight: bold;
    display: relative;
    top: 100%;
    margin: 0.5em 0em;
    padding:0;
`;

interface IModal {
    show?: boolean;
    title?: string;
    bodyText?: string;
    footerText?: string;
}

export const FormModal = ({
}: IModal) => {

    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const dispatch = useDispatch();

    const ErrorDisplay = selectedGenres.length ? <p></p> : <ErrorMessage>Select at least one genre to proceed</ErrorMessage>

    return(
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton onClick={() => dispatch(setIsAddingMovie(false))}/>
                    <ModalTitle>ADD MOVIE</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormRow>

                        <FormInputItem>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormInput type={"text"}/>
                        </FormInputItem>

                        <FormInputItem>
                            <FormLabel>
                                Release date
                            </FormLabel>
                            <FormInput type={"date"}/>
                        </FormInputItem>
                    </FormRow>
                    <FormRow>

                        <FormInputItem>
                            <FormLabel>
                                Movie URL
                            </FormLabel>
                            <FormInput placeholder="https://" type={"text"}/>
                        </FormInputItem>

                        <FormInputItem>
                            <FormLabel>
                                Rating
                            </FormLabel>
                            <FormInput placeholder="7.8" type={"number"}/>
                        </FormInputItem>
                    </FormRow>
                    <FormRow>

                        <FormInputItemSecondary>
                            <FormLabel>
                                Genre
                            </FormLabel>
                            <SelectInput placeholder="Select Genre">
                                <option>Select Genre</option>
                                <option>COMEDY</option>
                                <option>SCIENCE FICTION</option>
                                <option>THRILLER</option>
                                <option>HORROR</option>
                                <option>ROMANTIC</option>
                            </SelectInput>
                            {ErrorDisplay}
                        </FormInputItemSecondary>

                        <FormInputItem>
                            <FormLabel>
                                Runtime
                            </FormLabel>
                            <FormInput placeholder={"minutes"} type={"text"}/>
                        </FormInputItem>
                    </FormRow>
                    <FormRow>

                        <FormInputItem style={{width: "100%"}}>
                            <FormLabel>
                                Overview
                            </FormLabel>
                            <TextAreaInput/>
                        </FormInputItem>

                    </FormRow>
                </ModalBody>
                <ModalFooter>
                    <Button kind="altern">RESET</Button>
                    <Button kind="primary">SUBMIT</Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
}

export const SuccessModal = ({
    title,
    bodyText
}: IModal) => {

    const dispatch = useDispatch();

    return(
        <ModalOverlay kind={"secondary"}>
            <ModalContent kind={"secondary"}>
                <ModalHeader>
                    <ModalCloseButton onClick={() => dispatch(setIsAddingMovie(false))}/>
                    <ModalCheckIcon/>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ModalBodyText>
                        {bodyText}
                    </ModalBodyText>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
}

export const Modal = ({
    title,
    bodyText,
    footerText
}: IModal) => {

    const dispatch = useDispatch();

    return(
        <ModalOverlay kind={"secondary"}>
            <ModalContent kind={"secondary"}>
                <ModalHeader>
                    <ModalCloseButton onClick={() => dispatch(setIsAddingMovie(false))}/>
                    <ModalCheckIcon/>
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ModalBodyText>
                        {bodyText}
                    </ModalBodyText>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
}