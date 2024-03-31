import { Caption } from 'src/components';
import './Swatches.css';

interface SwatchesProps {
  colors: string[];
  caption?: string;
}

export const Swatches = ({ colors }: SwatchesProps) => {
  if (!Array.isArray(colors)) {
    return;
  }

  return (
    <>
      <div className="SwatchContainer">
        {colors.map((color, index) => (
          <div className="Swatch" key={color} style={{ backgroundColor: color }} />
        ))}
      </div>
    </>
  );
};
