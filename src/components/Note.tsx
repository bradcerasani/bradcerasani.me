import './Note.css';

type NoteProps = {
  children: React.ReactNode;
};

export function Note({ children }: NoteProps) {
  return <div className="Note">{children}</div>;
}
