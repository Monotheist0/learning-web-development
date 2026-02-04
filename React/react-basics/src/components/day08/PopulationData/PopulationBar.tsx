interface PopulationBarProps {
  country: string;
  population: number;
  maxPopulation: number;
}
function PopulationBar({
  country,
  population,
  maxPopulation,
}: PopulationBarProps) {
  const widthPercentage = (population / maxPopulation) * 100;
  return (
    <div className="item-center my-2 flex gap-4">
      <div className="w-32 text-left font-bold text-gray-700 uppercase">
        {country}
      </div>
      <div className="flex-1">
        <div
          className="h-8 rounded-sm bg-orange-400"
          style={{ width: `${widthPercentage}%` }}
        ></div>
      </div>

      <div className="w-32 text-right font-medium text-gray-600">
        {population.toLocaleString()}
      </div>
    </div>
  );
}
export default PopulationBar;
