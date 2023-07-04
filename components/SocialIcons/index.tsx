import { socialLinksList } from "@/utils/socialLinks";
import SocialIcon from "./SocialIcon";

const SocialIcons = () => {
    return (<div className="flex">{socialLinksList?.map((icon, index) => {
        return <SocialIcon src={icon?.src} href={icon?.href} key={index} />
    })}</div>);
}

export default SocialIcons;