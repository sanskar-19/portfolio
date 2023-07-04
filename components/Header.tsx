'use client'
import Link from "next/link";
import Button from "./Button";
import { socialLinksList } from "@/utils/socialLinks";
import SocialIcon from "@/app/_components/SocialIcon";

const Header = () => {
    return (
        <header className="container-wrapper z-20 h-20 bg-backgroundPrimary sticky mx-auto top-0 hidden justify-end items-center sm:flex">
            <ul className="flex gap-x-5 w-full justify-end items-center">
                <div className="flex gap-x-4">{socialLinksList?.map((icon, index) => {
                    return <SocialIcon src={icon?.src} href={icon?.href} key={index} />
                })}</div>
                <Button styleType="primary" label={"Contact Me"} type="button" handleClick={() => { }}></Button>
            </ul>
        </header>);
}

export default Header;