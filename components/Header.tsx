'use client'
import Button from "./Button";
import { SocialIcons } from "./index";

const Header = () => {
    return (
        <header className="container-wrapper z-20 h-20 bg-backgroundPrimary sticky mx-auto top-0 hidden justify-end items-center sm:flex">
            <ul className="flex gap-x-5 w-full justify-end items-center">
                <SocialIcons />
                <Button styleType="primary" label={"Get started"} type="button" handleClick={() => { }}></Button>
            </ul>
        </header>);
}

export default Header;