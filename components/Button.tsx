import { twMerge } from "tailwind-merge";

interface PropTypes {
    label?: String | "Default";
    handleClick?: Function;
    extraClass?: String;
    type?: 'button' | 'submit';
    styleType: 'primary' | 'secondary';
    disabled?: boolean
}
const Button = ({ label, handleClick, extraClass, type, styleType, disabled }: PropTypes) => {
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
        <button onClick={(event) => handleClick && handleClick(event)} type={type} className={twMerge(`${baseClass} ${disabled ? "pointer-events-none cursor-not-allowed grayscale" : "pointer-events-auto cursor-pointer grayscale-0"} ${extraClass}`)} disabled={disabled}>{label}</button>
    );
}

export default Button;