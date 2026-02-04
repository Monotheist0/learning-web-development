import ColorCell from './ColorCell';

interface ColorGridProps {
  colors: string[];
}

const ColorGrid = ({ colors }: ColorGridProps) => {
  return (
    <div className="mx-auto grid w-[90%] grid-cols-8 gap-1">
      {colors.map((color) => (
        <ColorCell key={color} hexCode={color} />
      ))}
    </div>
  );
};

export default ColorGrid;
