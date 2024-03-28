import './Container.css';

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function Container({ children, style }: ContainerProps) {
  return (
    <div className="Container" style={style}>
      {children}
    </div>
  );
}
