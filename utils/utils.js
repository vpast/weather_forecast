import { months } from "./constants";


export const getFormattedDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const getNextDate = (date, step) => {
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + step);
  return nextDay;
};
