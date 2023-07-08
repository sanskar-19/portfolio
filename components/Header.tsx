'use client'
import { useState } from "react";
import Button from "./Button";
import { SocialIcons } from "./index";
import Popup from "./Popup";
import Contact from "@/app/_components/Popup/Contact";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (<>
        <header className="container-wrapper z-20 h-20 bg-backgroundPrimary sticky mx-auto top-0 hidden justify-end items-center sm:flex">
            <ul className="flex gap-x-5 w-full justify-end items-center">
                <SocialIcons />
                {/* <Button styleType="primary" label={"Get started"} type="button" handleClick={() => { setOpen(true) }}></Button> */}
            </ul>
        </header>
        <Popup open={open} setOpen={setOpen} extraClass=" w-full max-w-[min(37.5rem,calc(100%-2rem))] lg:px-[6rem] px-[2rem]">
            <Contact />
        </Popup>
    </>
    );
}

export default Header;