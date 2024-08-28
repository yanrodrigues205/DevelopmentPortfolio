import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh -100px);
`;

export const Content = styled.div`
    display: flex;
    width: 1120px;
    height: calc(100vh - 100px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: auto;
    height: 70%;
    gap: 20px;

    &::-webkit-scrollbar
    {
    }
    @media (min-width: 1200px) 
    {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) 
    {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Itens = styled.div`
    background-color: white;
    display: flex;
    height: 210px;
    flex-direction: column;
    text-align: start;
    padding: 20px;
    background-color: black;
    border-radius: 20px;
    box-shadow: 1px 1px 18px rgba(2, 172, 202, 0.6);

    &:hover
    {
        cursor: pointer;
        box-shadow: 1px 1px 18px rgba(2, 172, 202, 1);

    }



`;

export const TitleItens = styled.span`
    font-size: 20px;
    justify-content: space-between;
`;

export const DescriptionItens = styled.span`
    font-size: 10px;
    margin-top: 10px;
    display: flex;
`;

export const LanguageItens = styled.button`
    background: white;
    padding: 5px;
    margin-top: 5px;
    max-width: 70px;
    display: flex;
    justify-content: space-around;
    border: none;
    border-radius: 10px;
    color: black;
`;

export const ButtonItens = styled.button`
    background: #02ACCA;
    padding: 10px;
    display: flex;
    width: 100px;
    margin-top: 5px;
    justify-content: space-around;
    border: none;
    border-radius: 10px;
`;

export const ContainerInput = styled.div`
    display: flex;
    max-width: 1120px;
    padding: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;