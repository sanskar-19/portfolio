'use client'
import Link from "next/link";
import Button from "./Button";

const Header = () => {
    return (
        <header className="container-wrapper z-20 h-20 bg-backgroundPrimary sticky mx-auto top-0 flex justify-end items-center">
            <ul className="flex gap-x-5 w-full justify-end items-center">
                <Link href={"#education"}><li className="menu-item">Education</li></Link>
                <li className="menu-item">Experience</li>
                <Button styleType="primary" label={"Contact Me"} type="button" handleClick={() => { }}></Button>
            </ul>
        </header>);
}

export default Header;