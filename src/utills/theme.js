import { colors } from './colors';
export const theme = {
  colors,
  font: {
    thin: 300,
    regular: 400,
    bold: 800,
  },
  media: {
    /*Po prostu chcę, żeby to lepiej wyglądało, bo ten background jest paskudny.
    Nie przejmujcie się, że te breakpointy są bez sensu xD*/
    tablet: '@media (max-width: 728px)',
    desktop: '@media (min-width: 1024px)',
  },
};
