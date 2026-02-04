# React Learning Journey

My progress learning React, TypeScript, and Vite.

## Daily Progress

### Day 1: React Basics
**Focus:** Introduction to React Components, Props, and TypeScript Interfaces.
- **[UserCard](src/components/day01/UserCard.tsx)**: A simple component demonstrating how to pass and display props with TypeScript interfaces.

### Day 2: State & Inputs
**Focus:** State management using `useState`, handling user inputs, forms, and rendering lists.
- **[Counter](src/components/day02/Counter.tsx)**: Basic state management (increment/decrement).
- **[ProfileEditor](src/components/day02/ProfileEditor.tsx)**: Managing object state and input fields.
- **[SignupForm](src/components/day02/SignupForm.tsx)**: Handling form submission and multiple inputs.
- **[Todo](src/components/day02/Todo.tsx)**: Managing array state (lists), adding, and removing items.

### Day 3: Side Effects (useEffect)
**Focus:** Data fetching and lifecycle management.
- **[EffectOne](src/components/day03/useEffectOne.tsx)**: Introduction to the `useEffect` hook.
- **[UserList](src/components/day03/UserList.tsx)**: Fetching data from an API using `useEffect`.

### Day 4: Forms & Validation
**Focus:** Complex form handling and validation logic.
- **[RegisterForm](src/components/day04/RegisterForm.tsx)**: Registration form implementation.
- **[ValidatedForm](src/components/day04/ValidatedForm.tsx)**: Form with real-time validation.

### Day 5: SimpleSocial Project
**Focus:** Combining state, effects, and props to create a social media feed.
- **[MainDashboard](src/components/day05/MainDashboard.tsx)**: Main feed view.
- **[PostCard](src/components/day05/PostCard.tsx)**: Individual post component.

### Day 6: Responsive Grid & Styling
**Focus:** Tailwind CSS v4, responsive grids, and refactoring.
- **[UserGrid](src/components/day06/UserGrid.tsx)**: Responsive grid layout.
- **[UserProfile](src/components/day06/UserProfile.tsx)**: Profile component with styling.

### Day 7: Final Dashboard (Blog)
**Focus:** Consolidating concepts into a final blog structure.
- **[FinalDashboard](src/components/day07/FinalDashboard.tsx)**: Complete blog application with state and styling.

---

## Setup

This project uses [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS v4](https://tailwindcss.com/).

### Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npx prettier --write .`: Format code
