//DAY - 1
//import UserCard from "./components/day01/UserCard";

// function App() {
//     return (
//         <>
//             <h1>Welcome to the App</h1>
//             <UserCard name="Monotheist0" job="Judging" />
//             <UserCard name="Bird" job="Flying" />
//             <UserCard name="Vipers" job="Terrifying" />
//         </>
//     );
// }

// export default App;

//DAY - 2, --COUNTER--
// import Counter from "./components/day02/Counter";

// function App() {
//     return (
//         <>
//             <Counter></Counter>
//         </>
//     );
// }
// export default App;

// --ProfileEditor--

// import ProfileEditor from "./components/day02/ProfileEditor";

// function App() {
//     return (
//         <>
//             <ProfileEditor></ProfileEditor>
//         </>
//     );
// }
// export default App;

// --SignupForm--

// import SignupForm from "./components/day02/SignupForm";

// function App() {
//     return (
//         <>
//             <SignupForm></SignupForm>
//         </>
//     );
// }
// export default App;

// --Todo--

// import Todo from "./components/day02/Todo";

// function App() {
//     return (
//         <>
//             <Todo></Todo>
//         </>
//     );
// }
// export default App;

//DAY - 3, useEffectOne
// import EffectOne from "./components/day03/useEffectOne";

// function App() {
//     return (
//         <>
//             <EffectOne></EffectOne>
//         </>
//     );
// }
// export default App;

//  ---------UserList---------
// import UserList from "./components/day03/UserList";

// function App() {
//     return (
//         <>
//             <UserList></UserList>
//         </>
//     );
// }
// export default App;

//DAY - 4, RegisterForm
// import RegisterForm from "./components/day04/RegisterForm";

// function App() {
//     return (
//         <>
//             <RegisterForm></RegisterForm>
//         </>
//     );
// }
// export default App;

// import ValidatedForm from "./components/day04/ValidatedForm";

// function App() {
//     return (
//         <>
//             <ValidatedForm></ValidatedForm>
//         </>
//     );
// }
// export default App;

// //DAY - 5, MainDashBoard
// import MainDashboard from "./components/day05/MainDashboard";

// function App() {
//     return (
//         <>
//             <MainDashboard></MainDashboard>
//         </>
//     );
// }
// export default App;

//Day - 6,

// function App() {
//     return (
//         <div className="bg-blue-500 h-screen flex justify-center items-center">
//             <h1 className="text-5xl font-bold text-white underline">It Works!</h1>
//         </div>
//     );
// }
// export default App;

// import UserGrid from "./components/day06/UserGrid";

// function App() {
//     return (
//         <div>
//             <UserGrid></UserGrid>
//         </div>
//     );
// }
// export default App;

// import FinalDashboard from "./components/day07/FinalDashboard";

// function App() {
//     return (
//         <div>
//             <FinalDashboard></FinalDashboard>
//         </div>
//     );
// }
// export default App;
// ----------------- ODD EVEN PRIME ---------------------
// import NumberGrid from './components/day08/OddEvenPrime/NumberGrid';
// function App() {
//   const numbers = Array.from({ length: 32 }, (_, i) => i);

//   return (
//     <div>
//       <h1 className="my-3 text-center font-[daredevil] text-3xl font-bold">
//         30 Days Of React
//       </h1>
//       <h2 className="text-center">Number Generator</h2>
//       <NumberGrid numbers={numbers} />
//     </div>
//   );
// }
// export default App;

// ----------------- HEXCOLORS ---------------------
// import ColorGrid from './components/day08/Hex Generator/ColorGrid';
// import { generateHexColor } from './components/day08/Hex Generator/utils';
// function App() {
//   const colors = Array.from({ length: 32 }, () => generateHexColor());

//   return (
//     <div className="flex h-screen flex-col items-center justify-center space-y-4">
//       <h1 className="text-3xl font-bold">30 Days Of React</h1>
//       <h2 className="text-xl">Hexadecimal Colors</h2>
//       <ColorGrid colors={colors} />
//     </div>
//   );
// }
// export default App;

// ----------------- Population Graph ---------------------

import PopulationGraph from './components/day08/PopulationData/PopulationGraph';

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'USA', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russia', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <PopulationGraph data={tenHighestPopulation} />
    </div>
  );
};

export default App;
