export interface Category {
  url: string;
  name: string;
}
export const getCrimen = ({ startIndex, stopIndex, cr }) => {
  return [...Array(stopIndex - startIndex)].map((i, ix) => {
    return cr?.Crimes[startIndex + ix];
  });
};
