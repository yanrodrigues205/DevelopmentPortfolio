import styled, { keyframes } from "styled-components";

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

const moveTopToCenter = keyframes`
    0%{
        opacity: 0;
        transform: translateY(150px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;

const moveImage = keyframes`
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-15px);
    }
    100%{
        transform: translateY(0);
    }
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:  calc(100vh - 100px);
`;

export const Content = styled.div`
    display: flex;
    width: 1120px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 40px;

    @media(max-width: 600px)
    {
        padding: 5px;
    }

    @media(max-width: 800px)
    {
        flex-direction: column-reverse;
    }
`;

export const Data = styled.div`
    display: grid;
    width: 50%;
    text-align: start;
    animation: ${fadeInLeft} 1.5s ease-in-out;
    @media(max-width: 800px)
    {
        width: 90%;
        margin-bottom: 80px;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: 500;

    @media(max-width: 800px)
    {
        font-size: 25px;
    }
`;

export const Position = styled.span`
    color: #0097b2;
    text-align: justify;
    margin-top: 10px;

`;

export const Description = styled.span`
    margin-top: 15px;
    color: lightgray;
    text-align: justify;
    font-family: "Nunito", sans-serif;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    animation: ${moveBottomToCenter} ease-in-out 1.5s;
`;

export const ProjectsButton = styled.button`
    display: flex;
    width: 10rem;
    padding: 10px;
    justify-content: space-between;
    margin-top: 20px;
    font-weight: bold;
    background-color: #02ACCA;
    text-align: center;
    flex-direction: row;
    align-items: center;
    border: none;
    transition: box-shadow 0.3s ease;
    border-radius: 7px;
    
    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
    }

    svg
    {
        font-size: 20px;
    }
`;

export const DownloadButton = styled.div`
    display: flex;
    width: 10rem;
    padding: 9px;
    justify-content: space-between;
    margin-top: 20px;
    font-weight: bold;
    background-color: #000000;
    border: none;
    transition: box-shadow 0.3s ease;
    border-radius: 7px;
    color: #02ACCA;
    border: 1px solid #02ACCA;
    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
        background: #02ACCA;
        cursor: pointer;
        color: #000000;
    }

    
`; 

export const Person = styled.div`
    display: flex;
    width: 40%;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    animation: ${moveImage} 3s ease-in-out infinite;

    img
    {
        width: 25rem;
        height: 25rem;
    }

    @media(max-width: 800px)
    {
        margin-top: 150px;
        width: 90%;
    }

    @media (max-width: 800px)
    {
        img
        {
            width: 18rem;
            height: 18rem;
        }
    }

    @media (max-width: 500px)
    {
        width: 30%;

        img
        {
            width: 13rem;
            height: 13rem;
        }
    }

`;

export const DevIcons = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
    margin-top: 10px;
    animation: ${moveTopToCenter} ease-in-out 1.5s;

    svg
    {
        cursor: pointer;
    }
`;