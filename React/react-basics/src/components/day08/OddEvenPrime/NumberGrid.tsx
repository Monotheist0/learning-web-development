import NumberCell from './NumberCell';

interface NumberGridProps {
  numbers: number[];
}

const NumberGrid = ({ numbers }: NumberGridProps) => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-8 gap-1">
      {numbers.map((num) => (
        <NumberCell key={num} number={num} />
      ))}
    </div>
  );
};

export default NumberGrid;
