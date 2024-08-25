import styled, { keyframes } from "styled-components";

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
    padding: 20px;

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

    @media(max-width: 800px)
    {
        width: 90%;
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

export const ProjectsButton = styled.button`
    display: flex;
    width: 10rem;
    padding: 10px;
    justify-content: space-between;
    margin-top: 20px;
    font-weight: bold;
    background-color: #02ACCA;
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

export const Person = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    animation: ${moveImage} 3s ease-in-out infinite;
    img
    {
        width: 25rem;
        height: 25rem;
    }

    @media(max-width: 800px)
    {
        width: 90%;
    }

    @media (max-width: 600px)
    {
        img
        {
            width: 18rem;
            height: 18rem;
        }
    }

`;

export const DevIcons = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
    margin-top: 10px;

    svg
    {
        cursor: pointer;
    }
`;