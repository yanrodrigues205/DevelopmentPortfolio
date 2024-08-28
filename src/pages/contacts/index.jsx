import { Container, SocialMedia, SocialMediaDescription, SocialMediaIcon, SocialMediaItems, SocialMediaLink, SocialMediaTitle } from "../../styles/contacts/style";
import {FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaArrowRight} from "react-icons/fa";
export default function Contacts()
{
    return (
        <>
            <Container>
                <SocialMedia>
                    <SocialMediaItems>
                        <SocialMediaIcon>
                            <FaEnvelope/>
                        </SocialMediaIcon>
                        <SocialMediaTitle>
                            E-mail
                        </SocialMediaTitle>
                        <SocialMediaDescription>
                            E-mail address is a good option to contact me about hiring and formal matters.
                        </SocialMediaDescription>
                        <SocialMediaLink>
                            Go to <FaArrowRight/>
                        </SocialMediaLink>
                    </SocialMediaItems>

                    <SocialMediaItems>
                        <SocialMediaIcon>
                            <FaPhone/>
                        </SocialMediaIcon>
                        <SocialMediaTitle>
                            Phone
                        </SocialMediaTitle>
                        <SocialMediaDescription>
                        Used to deal with extremely critical issues or situations of a personal nature.
                        </SocialMediaDescription>
                        <SocialMediaLink>
                            Go to <FaArrowRight/>
                        </SocialMediaLink>
                    </SocialMediaItems>

                    <SocialMediaItems>
                        <SocialMediaIcon>
                            <FaLinkedin/>
                        </SocialMediaIcon>
                        <SocialMediaTitle>
                            LinkedIn
                        </SocialMediaTitle>
                        <SocialMediaDescription>
                        Social network that I am using most of the time, great for following my professional career, with the respective companies and positions.
                        </SocialMediaDescription>
                        <SocialMediaLink>
                            Go to <FaArrowRight/>
                        </SocialMediaLink>
                    </SocialMediaItems>

                    <SocialMediaItems>
                        <SocialMediaIcon>
                            <FaGithub/>
                        </SocialMediaIcon>
                        <SocialMediaTitle>
                            GitHub
                        </SocialMediaTitle>
                        <SocialMediaDescription>
                            A great platform to follow my development activities in public projects, with several options for generating metrics.
                        </SocialMediaDescription>
                        <SocialMediaLink>
                            Go to <FaArrowRight/>
                        </SocialMediaLink>
                    </SocialMediaItems>
                </SocialMedia>
            </Container>
        </>
    )
}