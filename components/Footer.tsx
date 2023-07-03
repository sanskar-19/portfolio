import SocialIcon from "@/app/_components/SocialIcon";
import { socialLinksList } from "@/utils/socialLinks";

const Footer = () => {
    return (<footer className="bg-backgroundPrimary py-4 flex gap-x-2 relative sm:fixed w-full px-[2rem] bottom-0 justify-center sm:justify-end lg:justify-start">
        {socialLinksList?.map((icon, index) => {
            return <SocialIcon src={icon?.src} href={icon?.href} key={index} />
        })}
    </footer>);
}

export default Footer;