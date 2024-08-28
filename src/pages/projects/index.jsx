import { useEffect, useState, useRef } from "react"
import { Container, Content, Grid, Itens, TitleItens, DescriptionItens, ButtonItens, LanguageItens, SearchInput } from "./style";
import { FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function Projects()
{
    const [ itemsApi, setItemsApi ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState("");
    useEffect(() => {
        const username = "yanrodrigues205";
        const abortController = new AbortController();
        const getDataGitHubAPI = async () => {
            await fetch(`https://api.github.com/users/${username}/repos`)
            .then(async (response) => {
                if(!response.ok)
                {
                    throw new Error(response.status);
                }
                var data = await response.json();
                setItemsApi(data);
            })
            .catch((error) => {
                console.error(error);
            });
        }
  
        getDataGitHubAPI();

        return () => abortController.abort();
    }, []);
    
    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            console.log("aqui")
          const elementos = containerRef.current.querySelectorAll('.itens');
          console.log(elementos); // Aqui você terá uma NodeList de todos os elementos com a classe 'minha-classe'
        }
      }, []);

    return (
        <Container>
            <Content>
                <SearchInput
                    type="text"
                    placeholder="Search repositories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Grid>
                    {itemsApi && itemsApi.map(data => (
                        <Itens>
                            <TitleItens className="itens">{data.name.toUpperCase()}</TitleItens>
                            <DescriptionItens>{data.description && data.description.toUpperCase()}</DescriptionItens>
                            <LanguageItens>{data.language && data.language.toUpperCase()}</LanguageItens>
                            <Link href={data.owner.html_url}><ButtonItens>VIEW<FaArrowRight/></ButtonItens></Link>
                        </Itens>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}