"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type PopupProps = {
    open: boolean,
    setOpen: Function,
    children: React.ReactNode,
    extraClass?: string
}

const Popup = ({ open, setOpen, children, extraClass }: PopupProps) => {
    const popupRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        if (open) popupRef?.current?.showModal();
        else popupRef?.current?.close();
        return () => {
            popupRef?.current?.close();
        };
    }, [open]);
    return (
        <dialog
            ref={popupRef}
            className={twMerge(
                `backdrop:bg-[rgba(0,0,0,0.5)] h-max w-max bg-backgroundPrimary border border-greenSecondary outline-none rounded-lg green-shadow px-[4.5rem] lg:px-[6rem] py-8 ${extraClass}`
            )}
            onClose={() => {
                setOpen(false);
            }}
        >
            <Image
                src="/Close.png"
                className="object-contain absolute right-8 top-8"
                role="button"
                onClick={() => {
                    setOpen(false);
                    popupRef?.current?.close();
                }}
                height={24}
                width={24}
                alt="Couldn't load the icon"
            />
            {children}
        </dialog>
    );
};

export default Popup;
