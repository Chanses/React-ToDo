interface IButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ title = "Сохранить", ...props }: IButtonProps) => {
  console.log(props.disabled);
  return (
    <button
      name="taskSaveButton"
      style={{ background: "#adbad3", cursor: "default" }}
      onClick={props.onClick}
      {...(props.disabled
        ? { disabled: true }
        : { disabled: false, style: { background: "#3F72AF" } })}
    >
      {title}
    </button>
  );
};

export default Button;
