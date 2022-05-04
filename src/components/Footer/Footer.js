import { LabeninjasFooter, SocialMedias } from "./styled";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
    return (
        <LabeninjasFooter>
            <SocialMedias>
                <li><a href="https://www.facebook.com/"><Facebook style={{ color: '#cc66ff' }} /></a></li>
                <li><a href="https://www.instagram.com/"><Instagram style={{ color: '#cc66ff' }} /></a></li>
                <li><a href="https://www.twitter.com/"><Twitter style={{ color: '#cc66ff' }} /></a></li>
            </SocialMedias>
            <p>Copyright © 2022 - All rights reserved - LabeNinjas</p>
            
        </LabeninjasFooter>
    )
}

export default Footer;