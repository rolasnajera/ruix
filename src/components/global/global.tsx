interface Props {
  children?: React.ReactNode | React.ReactNode[];
}
export default function GlobalContainer({ children }: Readonly<Props>) {
  return <div className="flex items-center justify-center h-screen bg-slate-100">{children}</div>;
}
