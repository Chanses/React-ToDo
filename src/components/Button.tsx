import "./button.css";

interface IButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: any;
  className?: string;
}

const Button = ({ title = "Сохранить", ...props }: IButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className + " button"}
      onClick={props.onClick}
      {...(props.disabled
        ? {
            disabled: true,
          }
        : { disabled: false })}
    >
      {title}
    </button>
  );
};

export default Button;
