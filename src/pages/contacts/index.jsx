import Link from "next/link";
import { ButtonInput, ContactDescription, ContactTitle, Container, Content, InputInline, SocialMedia, SocialMediaDescription, SocialMediaIcon, SocialMediaItems, SocialMediaLink, SocialMediaTitle, SubContentAlign, SubContentLeft, SubContentRight, TextArea, TextInput, TitleSocialMedia } from "../../styles/contacts/style";
import {FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaArrowRight, FaPaperPlane} from "react-icons/fa";
export default function Contacts()
{
    let socialMediaREF = "<SOCIAL MEDIA/>"
    return (
        <>
            <Container>
                <Content>
                    <SubContentLeft>
                        <SubContentAlign>
                            <ContactTitle>
                                Contact US
                            </ContactTitle>
                            <ContactDescription>
                            Let's connect and create something amazing together. Feel free to reach out with any inquiries or project ideas! 🚀
                            </ContactDescription>
                        </SubContentAlign>
                    </SubContentLeft>
                    <SubContentRight>
                        <SubContentAlign>
                            <InputInline>
                                <TextInput type="text" placeholder="Telephone Number" id="phone_form" />
                                <TextInput type="email" id="email_form" placeholder="Email"/>
                            </InputInline>
                            <TextInput type="text" placeholder="Enter the subject to be reported" id="title_form" />
                            <TextArea placeholder="Briefly describe the subject to be discussed" id="description_form"></TextArea>
                            <ButtonInput type="button"> <FaPaperPlane/></ButtonInput>
                        </SubContentAlign>
                    </SubContentRight>
                </Content>
                <TitleSocialMedia>
                 {socialMediaREF}
                </TitleSocialMedia>

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
                        <Link href="mailto:yan.pablo205@gmail.com">
                            <SocialMediaLink>
                                SEE MORE <FaArrowRight/>
                            </SocialMediaLink>
                        </Link>
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
                        <Link href="tel:+5518996234279">
                            <SocialMediaLink>
                                SEE MORE <FaArrowRight/>
                            </SocialMediaLink>
                        </Link>
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
                        <Link href="https://www.linkedin.com/in/yan-pablo-rodrigues-54a661226/">
                            <SocialMediaLink>
                                SEE MORE <FaArrowRight/>
                            </SocialMediaLink>
                        </Link>
                        
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

                        <Link href="https://github.com/yanrodrigues205">
                            <SocialMediaLink>
                                SEE MORE <FaArrowRight/>
                            </SocialMediaLink>
                        </Link>
                    </SocialMediaItems>
                </SocialMedia>
            </Container>
        </>
    )
}