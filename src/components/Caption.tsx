import './Caption.css';

type NoteProps = {
  children?: React.ReactNode;
  htmlContent?: string;
};

export function Caption({ children, htmlContent }: NoteProps) {
  return (
    <figcaption
      className="Caption"
      dangerouslySetInnerHTML={htmlContent ? { __html: htmlContent } : undefined}
    >
      {!htmlContent && children ? children : null}
    </figcaption>
  );
}
