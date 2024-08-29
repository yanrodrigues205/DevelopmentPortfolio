import styled, { keyframes } from "styled-components";

const moveLeftToCenter = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-150px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;
const moveBottomToCenter = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-150px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;
const moveRightToCenter = keyframes`
    0%{
        opacity: 0;
        transform: translateX(150px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 1120px;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1120px;
    width: 100%;
    @media(max-width: 1200px)
    {
        flex-direction: column;
        padding: 10%;
    }
`;

export const SubContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: calc(100vh - 100px);
    color: black;
    animation: ${moveLeftToCenter} ease-in-out 1.5s;

    @media (max-width: 1200px) {
        width: 100%;
        height: calc(50vh - 100px);
    }
`;

export const SubContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: calc(100vh - 100px);
    animation: ${moveRightToCenter} ease-in-out 1.5s;

    @media (max-width: 1200px) {
        width: 100%;
        height: calc(50vh - 100px);
    }


`;

export const SubContentAlign = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 60%;
    padding: 25px;
    gap: 10px;
    @media (max-width: 1200px)
    {
        height: 100%;
        padding: 5px;
        margin-bottom: 20px;
    }
`;

export const SocialMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1120px;
    width: 100%;
    height: 100%;
    padding: 15px;
    gap: 20px;
    animation: ${moveBottomToCenter} 1.5s forwards;
    opacity: 0;
    @media(max-width: 1160px)
    {
        grid-template-columns: repeat(2, 1fr);
        margin: 5% auto;
        padding: 3%;
    }

    @media(max-width: 850px)
    {
        padding: 5%;
        grid-template-columns: repeat(1, 1fr);
    }

`;

export const SocialMediaItems = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    color: black;
    height: 380px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 18px rgba(2, 172, 202, 0.6);
    &:hover
    {
        cursor: pointer;
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
    }
`;

export const SocialMediaIcon = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    background-color: #02ACCA;
    color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 110px;
    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
    }
`

export const SocialMediaTitle = styled.span`
    display: flex;
    width: 100%;
    text-align: center;
    height: 20%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
`;

export const SocialMediaDescription =  styled.span`
    width: 100%;
    height: 20%;
    text-align: start;
    color: white;
    font-size: 15px;
    padding: 10px;
    font-family: "Nunito", sans-serif;
    @media(max-width: 500px)
    {
        font-size: 17px;
    }
`;

export const SocialMediaLink = styled.span`
    display: flex;
    width: 60%;
    margin: 0 auto;
    height: 40px;
    margin-top: 20%;
    font-size: 20px;
    background: #02ACCA;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 13px;
    color: black;
    cursor: pointer;
    font-family: "New Amsterdam",sans-serif;

    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
    }
`;

export const InputInline = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const TextInput = styled.input`
    background: transparent;
    color: white;
    border: 2px solid #02ACCA;
    text-align: start;
    height: 40px;
    border-radius: 15px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    font-family: "New Amsterdam",sans-serif;

`;

export const TextArea = styled.textarea`
    background: transparent;
    color: white;
    border: 2px solid #02ACCA;
    text-align: start;
    height: 100px;
    border-radius: 15px;
    width: 100%;
    padding: 10px;
    font-family: "New Amsterdam",sans-serif;

`;

export const ButtonInput = styled.button`
    height: 42px;
    border-radius: 15px;
    border: none;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    background: #02ACCA;
    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
        cursor: pointer;
        color: #000000;
    }
`;

export const ContactTitle = styled.span`
    width: 100%;
    text-align: start;
    font-size: 60px;
    font-family: "New Amsterdam",sans-serif;
    color: #02ACCA;
`;

export const ContactDescription = styled.span`
    font-size: 30px;
    text-align: start;
    color: white;
    animation: ${moveBottomToCenter} ease-in-out 1s;
`;

export const TitleSocialMedia = styled.div`
    display: flex;
    font-size: 40px;
    text-align: center;
    padding: 10px;
    justify-content: center;
    color: #02ACCA;
    font-family: "New Amsterdam",sans-serif;

`;