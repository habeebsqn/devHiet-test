export const getTimeAgo = (date: string) => {
  const now: any = new Date();
  const postedDate: any = new Date(date);

  const timeDiff = now - postedDate;

  const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    return "today";
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else {
    return `${daysAgo} days ago`;
  }
};
