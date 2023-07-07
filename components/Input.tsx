import { twMerge } from "tailwind-merge";

type InputProps = {
    type: "text" | "number" | "email";
    placeholder: string;
    name: string;
    register: Function;
    extraClass?: string;
}
const Input = ({ type, placeholder, name, register, extraClass }: InputProps) => {
    return (<input type={type} placeholder={placeholder} name={name} className={twMerge(`outline-none focus:outline-none border border-white bg-transparent w-full h-12 px-4 rounded-md ${extraClass}`)} {...register(name)} />);
}

export default Input;