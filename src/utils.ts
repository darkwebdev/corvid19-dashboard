export const hoursSince = (time: string): string => {
  const minutes = (Date.now() - new Date(time).getTime()) / 1000 / 60;
  return String(Math.floor(minutes));
};
