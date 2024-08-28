import Link from "next/link";
import { Container, Content, Data, Description, Person, Position, ProjectsButton, Title, DevIcons} from "./style";
import { Typewriter} from "react-simple-typewriter";
import { FaPhp, FaDocker, FaArrowRight } from 'react-icons/fa';
import { DiReact, DiMysql, DiDart } from 'react-icons/di';
import { SiFlutter, SiTypescript } from 'react-icons/si';

export default function Home()
{
    return (
        <>
            <Container>
                <Content>
                    <Data>
                        <Title>
                            <Typewriter
                                words={["Who is Yan?", "Learn More About Me."]}
                                loop={1000}
                                cursorStyle='|'
                                cursor
                                typeSpeed={150}
                                deleteSpeed={150}
                                delaySpeed={2000}
                            />
                        </Title>
                        <Position>
                            Full-Stack Web Developer
                        </Position>

                        <Description>
                            Graduated in Systems Analysis and Development, Currently working as a Software Analyst and Implementer, sharing and receiving continuous learning.
                            <br/>
                            Experience in embedded systems engineering and high-performance web applications.
                        </Description>

                        <DevIcons>
                            <div>
                                <DiReact title="React" style={{ color: '#61DAFB' }} />
                            </div>
                            <div>
                                <SiTypescript title="TypeScript" style={{ color: '#3178C6' }} />
                            </div>
                             <div>
                                <FaPhp title="PHP" style={{ color: '#3178C6' }} />
                            </div>
                            <div>
                                <DiDart title="Dart" style={{ color: '#00B4AB' }} />
                            </div>
                            <div>
                                <SiFlutter title="Flutter" style={{ color: '#02569B' }} />
                            </div>
                            <div>
                                <FaDocker title="Docker" style={{ color: '#2496ED' }} />
                            </div>
                            <div>
                                <DiMysql title="MySQL" style={{ color: '#00758F' }} />
                            </div>
                        </DevIcons>

                        <Link href="/projects">
                            <ProjectsButton>
                                PROJECTS <FaArrowRight />
                            </ProjectsButton>
                        </Link>
                    </Data>

                    <Person>
                        <img src="images/yan.png"></img>
                    </Person>
                </Content>
            </Container>
        </>
    )
}