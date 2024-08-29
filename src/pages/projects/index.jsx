import { useEffect, useState, useRef } from "react"
import { Container, Content, Grid, Itens, TitleItens, DescriptionItens, ButtonItens, LanguageItens, SearchInput, ContentTitle } from "../../styles/projects/style";
import { FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function Projects()
{
    const [ itemsApi, setItemsApi ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState("");
    const username = "yanrodrigues205";

    useEffect(() => {
        const abortController = new AbortController();
        const getDataGitHubAPI = async () => {
            await fetch(`https://api.github.com/users/${username}/repos`,
                {signal: abortController.signal}
            )
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
    }, [username]);

    const filteredItems = itemsApi.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const title = "<GITHUB PROJECTS/>";
    return (
        <Container>
            <Content>
                <ContentTitle>
                    {title}
                </ContentTitle>
                <SearchInput
                    type="text"
                    placeholder="🗺️  Write the Title of a Project... 🗺️"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Grid>
                    {filteredItems && filteredItems.map(data => (
                        <Itens key={data.id}>
                            <TitleItens className="itens">{data.name.toUpperCase()}</TitleItens>
                            <DescriptionItens>{data.description && data.description.toUpperCase()}</DescriptionItens>
                            <LanguageItens>{data.language && data.language.toUpperCase()}</LanguageItens>
                            <Link href={data.html_url}><ButtonItens>VIEW<FaArrowRight/></ButtonItens></Link>
                        </Itens>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}