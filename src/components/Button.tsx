export type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "icon";
  size: "small" | "normal" | "large";
};

function Button({ label, variant, size }: ButtonProps) {
  return <button>{label}</button>;
}

export default Button;
