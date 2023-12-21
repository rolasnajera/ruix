interface Props {
  label: string;
  variant?: string;
  color?: string;
  size?: string;
}

const colorProps = {
  default: "text-sky-900 bg-sky-200",
  success: "text-green-900 bg-green-200",
  danger: "text-red-900 bg-red-200",
  stone: "text-slate-900 bg-slate-200",
};

const sizeProps = {
  base: "text-sm",
  xs: "text-xs",
  lg: "text-base",
  xl: "text-lg",
};

export default function Chip({
  label,
  variant = "default",
  color = "default",
  size = "base",
}: Props) {
  return (
    <span
      className={"px-2 py-1 rounded-xl opacity-90 " + colorProps[color] + " " + sizeProps[size]}>
      {label}
    </span>
  );
}
