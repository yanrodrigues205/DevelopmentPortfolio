import React, { useState } from "react";
import { Container, Content, ContentTitle, SubTitle, Title, Menu, NavLinks, CloseSideBar, Ancora } from "./style.js";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header()
{
    const [sideBar, setSideBar ] = useState(false); // GERENCIEMENTO DE ESTADOS, sideBar É RESPONSAVEL POR ARMAZENAR O VALOR, E setSideBar POR MANIPULAR O VALOR.
    const { asPath}  = useRouter(); // PAGA TODO CONTEÚDO DEPOIS DA PORTA DA URL

    /**
     * @description FUNÇÃO RESPONSÁVEL POR MANIPULAR A BARRA LATERAL SE A RESOLUÇÃO DA MESMA FOR MENOR/IGUAL A 600px, CASO SEJA CLICADO O MESMO IRA INVERTER O VALOR DE sideBar, OU SEJA, SE FOR FALSO VIRA TRUE E VICE-VERSA
     */
    const title_page = "<Yan Rodrigues/>";
    const showSideBar = () => setSideBar(!sideBar);

    function setPage(path)
    {
        if(asPath === `/${path}`)
        {
            return "active";
        }
        else
        {
            return "";
        }
    }


    return (
        <>
            <Container>
                <Content>
                    <ContentTitle>
                        <Title alt="Titulação do cabeçalho da Página - Yan Rodrigues" >
                            {title_page}
                        </Title>
                        <SubTitle alt="Obejetivo da página - Portifolio">
                            Portfolio
                        </SubTitle>
                    </ContentTitle>

                    <Menu>
                        <FaBars onClick={showSideBar}></FaBars>
                    </Menu>

                    <NavLinks sideBar={sideBar}>
                        <CloseSideBar onClick={showSideBar}><FaTimes/></CloseSideBar>
                        <Link href="/">
                            <Ancora className={setPage("")} onClick={showSideBar}>Home</Ancora>
                        </Link>

                        <Link href="/projects">
                            <Ancora className={setPage("projects")} onClick={showSideBar}>Projects</Ancora>
                        </Link>

                        <Link href="/contacts">
                            <Ancora className={setPage("contacts")} onClick={showSideBar}>Contacts</Ancora>
                        </Link>
                    </NavLinks>
                </Content>
            </Container>
        </>
    )
}