export const formatDate = (date: string) => {
  const transformedDate = new Date(date);
  const month = String(transformedDate.getMonth() + 1).padStart(2, "0");
  const year = String(transformedDate.getFullYear()).slice(-2);

  return `${month}/${year}`;
};
