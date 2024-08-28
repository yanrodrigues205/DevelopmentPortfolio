import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1120px;
    flex-direction: column;
`;

export const SocialMedia = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1120px;
    width: 100%;
    height: 100%;
    padding: 15px;
    gap: 20px;

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
    height: 340px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 18px rgba(2, 172, 202, 0.6);
    &:hover
    {
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
    font-family: "Nunito", sans-serif;
`;

export const SocialMediaLink = styled.span`
    display: flex;
    width: 60%;
    margin: 0 auto;
    height: 15%;
    margin-top: 7%;
    background: #02ACCA;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 13px;
    color: black;
    cursor: pointer;

    &:hover
    {
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);
    }
    svg
    {
        font-size: 20px;
    }
`;