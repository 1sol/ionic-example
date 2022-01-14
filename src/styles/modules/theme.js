const calcRem = (size) => `${size / 16}rem`;

const common = {
  flex: `display: flex;`,

  flexHorizontalCenter: `
   justify-content: center;
   `,

  flexVerticalCenter: `
   align-items: center;
   `,

  flexAlignCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
   `,

  flexRow: `
   flex-direction: row;
   `,

  flexSpaceBetween: `
    justify-content: space-between;
   `,

  flexEnd: `
   justify-content: flex-end;
   `,

  flexColumn: `
    flex-direction: column;
   `,

  flexWrap: `
    flex-wrap: wrap;
   `,

  screenWidth: `width: 28rem`,
};

const fontSizes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(32),
};

const fontSpacing = {
  base: calcRem(25),
};

const paddings = {
  xxs: calcRem(2),
  xs: calcRem(4),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(18),
  xxxl: calcRem(20),
};

const margins = {
  xs: calcRem(4),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(18),
  xxxl: calcRem(20),
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const colors = {
  white: "#fff",
  black: "#000",
  black2: "#282828",
  gray: "#C6C6C6",
  lightGray: "#E0E0E0",
  coral: "#FF7473",
};

const fontWeight = {
  font100: "100",
  font200: "200",
  font300: "300",
  font400: "400",
  font500: "500",
  font600: "600",
  bold: "bold",
};

const theme = {
  common,
  fontSizes,
  fontSpacing,
  paddings,
  margins,
  deviceSizes,
  device,
  colors,
  fontWeight,
};

export default theme;
