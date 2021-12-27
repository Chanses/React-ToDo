interface IButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({ title = "Сохранить", ...props }: IButtonProps) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      {...(props.disabled
        ? {
            disabled: true,
            background: "#adbad3",
            cursor: "default",
          }
        : { disabled: false })}
    >
      {title}
    </button>
  );
};

export default Button;
