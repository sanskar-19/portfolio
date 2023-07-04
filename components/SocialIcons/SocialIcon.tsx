type SocialIconProps = {
    src: string;
    href: string;
}

const SocialIcon = ({ src, href }: SocialIconProps) => {
    return <div className="rounded-[6.25rem] flex justify-center items-center p-2 h-12 w-12">
        <a href={href} target="blank">
            <img className="object-contain grayscale" src={src} alt="Couldn't load the icon" />
        </a>
    </div>
}

export default SocialIcon;