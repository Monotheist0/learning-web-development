import { getBackgroundColorClass } from './utils';

interface NumberCellProps {
  number: number;
}

function NumberCell({ number }: NumberCellProps) {
  return (
    <div
      className={`p-8 text-center text-2xl font-bold text-white ${getBackgroundColorClass(number)} `}
    >
      {number}
    </div>
  );
}
export default NumberCell;
