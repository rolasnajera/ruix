interface Props {
  children?: React.ReactNode | React.ReactNode;
}
export default function ListCardLayout({ children }: Props) {
  return <div className="flex flex-col space-y-4 p-2">{children}</div>;
}
