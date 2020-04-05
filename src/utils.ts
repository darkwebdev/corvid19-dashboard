export const hoursSince = (time: string): string => {
  const hours = (Date.now() - new Date(time).getTime()) / 1000 / 60 / 60;
  const h = Math.floor(hours);

  return String(h);
};
