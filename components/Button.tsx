import { twMerge } from "tailwind-merge";

interface PropTypes {
    label?: String | "Default";
    handleClick?: Function;
    extraClass?: String;
    type?: 'button' | 'submit';
    styleType: 'primary' | 'secondary';
}
const Button = ({ label, handleClick, extraClass, type, styleType }: PropTypes) => {
    let baseClass = "";

    // Assign the style to the button for different variants
    switch (styleType) {
        case "primary":
            baseClass = "primary-button";
            break;

        case "secondary":
            baseClass = "secondary-button";
            break;

    }
    return (
        <button onClick={(event) => handleClick && handleClick(event)} type={type} className={twMerge(`${baseClass} ${extraClass}`)}>{label}</button>
    );
}

export default Button;