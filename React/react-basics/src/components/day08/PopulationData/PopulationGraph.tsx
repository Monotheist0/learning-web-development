import PopulationBar from './PopulationBar';

interface CountryData {
  country: string;
  population: number;
}

interface PopulationGraphProps {
  data: CountryData[];
}

function PopulationGraph({ data }: PopulationGraphProps) {
  const highestPopulation = data[0].population;
  return (
    <div className="mx-auto w-full max-w-4xl bg-white p-4 shadow-lg">
      <h1 className="mb-2 text-center text-3xl font-bold">30 Days Of React</h1>
      <h2 className="mb-8 text-center text-xl text-gray-500">
        World population
      </h2>
      <p className="mb-6 text-center text-sm text-gray-400">
        Ten most populated countries
      </p>
      <div className="flex flex-col">
        {data.map((item) => (
          <PopulationBar
            key={item.country}
            country={item.country}
            population={item.population}
            maxPopulation={highestPopulation}
          ></PopulationBar>
        ))}
      </div>
    </div>
  );
}
export default PopulationGraph;
