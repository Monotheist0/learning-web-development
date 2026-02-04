const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getBackgroundColorClass = (num: number): string => {
  if (isPrime(num)) return 'bg-red-500';
  if (num % 2 === 0) return 'bg-green-500';
  return 'bg-yellow-400';
};
