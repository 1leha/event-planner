interface IThemeField {
  [key: string]: string | number;
}

interface ITheme {
  [key: string]: IThemeField | number[];
}

export const theme: ITheme = {
  borders: {
    none: 'none',
    normal: '1px solid',
  },

  colors: {
    bg: '#FEFCFF',
    accent: '#7B61FF',
    hover: '#6243FF',
    iconHover: '#7B61FF20',
    error: '#FF2B77',
    hight: '#FF2B77',
    medium: '#E2A300',
    low: '#6BD475',
    text: '#3F3F3F',
    divider: '#ACA7C3',
    white: '#FFFFFF',
  },

  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Inter, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '26px',
    xxl: '40px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  letterSpacings: {
    normal: 0,
    label: '0.4px',
  },

  lineHeights: {
    normal: 1,

    cardTitle: 1.5,
    cardDate: 1.71,
    cardLocation: 1.71,
    cardDescription: 1.42,

    calendar: 1.33,

    smallButton: 1.33,
    middleButton: 1.42,
    largeButton: 1.4,

    textField: 1.5,

    error: 1.33,
  },

  radii: {
    none: 'none',
    card: '12px',
    button: '8px',
    buttonSmall: '4px',
    category: '8px',
    image: '8px',
    textField: '8px',
    searchField: '10px',
    round: '50%',
  },

  shadows: {
    standart: `2px 4px 9px 0px rgba(166, 141, 174, 0.28)`,
  },

  space: [0, 2, 4, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 64, 128, 256],

  sizes: {
    wholeHeight: '100vh',
  },

  transitions: { standart: 'all 0.3s ease-in' },
};

// borders:	border, border-top, border-right, border-bottom, border-left, border-block, border-block-end, border-block-start, border-inline, border-inline-end, border-inline-start
// borderStyles:	border-style, border-top-style, border-bottom-style, border-left-style, border-right-style, border-block-end-style, border-block-start-style, border-block-style, border-inline-end-style, border-inline-start-style, border-inline-style
// borderWidths:	border-width, border-top-width, border-bottom-width, border-left-width, border-right-width, border-block-end-width, border-block-start-width, border-block-width, border-inline-end-width, border-inline-start-width, border-inline-width, column-rule-width
// colors:	color, background, background-color, border-color, caret-color, column-rule-color, outline-color, text-decoration-color, border-top-color, border-bottom-color, border-left-color, border-right-color, border-block-color, border-block-end-color, border-block-start-color, border-inline-color, border-inline-end-color, border-inline-start-color, fill, stroke
// fonts:	font-family
// fontSizes:	font-size
// fontWeights:	font-weight
// letterSpacings:	letter-spacing
// opacities:	opacity
// radii:	border-radius, border-top-right-radius, border-top-left-radius, border-bottom-right-radius, border-bottom-left-radius, border-end-end-radius, border-end-start-radius, border-start-end-radius, border-start-start-radius
// shadows:	box-shadow, text-shadow
// sizes:	width, min-width, max-width, height, min-height, max-height, flex-basis, block-size, inline-size, max-block-size, max-inline-size, min-block-size, min-inline-size, column-width
// space:	margin, margin-top, margin-right, margin-bottom, margin-left, margin-block, margin-block-end, margin-block-start, margin-inline, margin-inline-end, margin-inline-start, padding, padding-top, padding-right, padding-bottom, padding-left, padding-block, padding-block-end, padding-block-start, padding-inline, padding-inline-end, padding-inline-start, scroll-margin, scroll-margin-top, scroll-margin-right, scroll-margin-bottom, scroll-margin-left, scroll-padding, scroll-padding-top, scroll-padding-right, scroll-padding-bottom, scroll-padding-left, inset, inset-block, inset-block-end, inset-block-start, inset-inline, inset-inline-end, inset-inline-start, top, right, bottom, left, grid-gap, grid-column-gap, grid-row-gap, gap, column-gap, row-gap
// transitions:	transition
// zIndices:	z-index
