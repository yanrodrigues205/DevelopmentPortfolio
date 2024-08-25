import styled from "styled-components";
/**
 * @description COMPONENTE PRINCIPAL DO CONTEÚDO DO HEADER
 */
export const Container = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 10px 10px 2px rgba(172, 172, 172, 0.1);
`;

/**
 * @description COMPONENTE PARA DELIMITAR O HEADER PARA QUE O MESMO NÃO FIQUE MUITO ESTIFCADO AO UTILIZAR TELAS GRANDES
 */
export const Content = styled.div`
    display: flex;
    width: 1120px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const ContentTitle = styled.div`
    text-align: end;
`;

export const Title = styled.div`
    font-size: 30px;
    font-family: "New Amsterdam", sans-serif;
`;

export const SubTitle = styled.div``;

/**
 * @description DIV RESPONSÁVEL POR ARMAZENAR CONTEÚDO DO MENU, A MESMA SÓ É ATIVADA SE A RESOLUÇÃO FOR MENOR/IGUAL A 600px
 */
export const Menu = styled.div`
    font-size: 30px;
    display: none;
    cursor: pointer;

    @media (max-width: 600px)
    {
        display: flex;
    }
`;

/**
 * @description NAV RESPONSÁVEL POR ARMAZENAR OS ITENS DE MENU, OU SEJA, OS SETORES DAS PÁGINAS
 */
export const NavLinks = styled.nav`
    display: flex;
    gap: 20px;

    @media (max-width: 600px)
    {
        position: fixed;
        flex-direction: column;
        height: 100%;
        background-color: #060606;
        gap: 0px;
        top: 0px;
        right: 0px;
        width: 80%;
        right: ${props => (props.sideBar ? "0" : "-100%")};
        //RESPONSÁVEL POR DEFINIR SE A BARRA DE MENU IRÁ APARECER OU NÃO, SE FOR APARECER RESULTADO IGUAL 0, SE NÃO MENOS 100% PARA ESCONDE-LÁ
        transition: 0.8s;

        a{
            margin-top: 100px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        //DEFININDOS AS TAGS "a" FILHAS DA NAV, PARA QUE A MESMAS SE ADAPTEM CONFORME A RESOLUÇÃO DE MENOR/IGUAL 600px
    }
`;

/**
 * @description DIV RESPONSÁVEL PELO "X" DE FECHAR A BARRA LATERAL, O MESMO SÓ FICA VISÍVEL SE A RESOLUÇÃO FOR MENOR/IGUAL A 600px
 */
export const CloseSideBar = styled.div`
    position: absolute;
    display: none;
    font-size: 30px;
    right: 15px;
    top: 35px;
    cursor: pointer;

    @media (max-width: 600px)
    {
        display: flex;
    }
`;

/**
 * @description RESPONSÁVEL POR APRESENTAR 0S SETORES DISPONÍVEIS NAS PÁGINAS
 */
export const Ancora = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 100px;
    transition: 0.3s;
    text-decoration: none;
    color: white;
    width: 100%;

    &.active
    {
        border-bottom: 4px solid #ffffff61;
        border-top: 4px solid #ffffff61;
        border-radius: 10px;
    }//PARTIÇÃO RESPONSÁVEL CASO A ANCORA RECEBER MAIS UMA CLASSE DENOMINADA DE 'active'

    @media (min-width: 600px)
    {
        display: flex;
        align-items: center;
        padding: 0px 10px;
    }
`;