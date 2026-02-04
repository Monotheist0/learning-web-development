interface ColorCellProps {
  hexCode: string;
}

function NumberCell({ hexCode }: ColorCellProps) {
  return (
    <div
      className="flex aspect-square items-center justify-center text-sm font-bold text-white"
      style={{ backgroundColor: hexCode }}
    >
      {hexCode}
    </div>
  );
}
export default NumberCell;
