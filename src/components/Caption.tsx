import './Caption.css';

type NoteProps = {
  children?: React.ReactNode;
  htmlContent?: string;
};

export function Caption({ children, htmlContent }: NoteProps) {
  return (
    <figcaption className="Caption">
      {/* biome-ignore lint: htmlContent src is controlled  */}
      {htmlContent ? <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> : children}
    </figcaption>
  );
}
