export const hoursSince = (time: string): string => {
  const hours = (Date.now() - new Date(time).getTime()) / 1000 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours % h) * 60);

  return `${h}:${m}`;
};
