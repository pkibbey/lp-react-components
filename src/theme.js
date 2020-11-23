/*
  Base theme styles that should be aligned with the design guidelines tokens
*/

export default {
  fontSizes: [
    '.75rem',
    '.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem'
  ],
  space: [
    0,
    '.25rem',
    '.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '4rem',
    '8rem',
    '11.875rem'
  ],
  colors: {
    orange: '#ff6900',
    electricBlue: '#005EF4',
    electricBlueHover: '#003FA3',
    darkBlue: '#1B1E4D',
    navy: '#090C43',
    darkNavy: '#04051F',
    navyGray: '#2D2F52',
    darkGray: '#675D55',
    darkerGray: '#463E36',
    gray: '#847970',
    lightGray: '#D9D4D0',
    lighterGray: '#F8F5F3',
    lightGrey: '#A2A3B8',
    red: '#DF2A31',
    lightRed: '#FEECEC',
    lightBlue: '#5879DA',
    shadow: '#141358',
    aqua: '#5ED7FB',
    aquaHover: '#00a4d6'
  },
  text: {
    errorInformation: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'navyGray',
      WebkitFontSmoothing: 'antialiased'
    },
    errorText: {
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      lineHeight: '20px',
      color: 'red',
      WebkitFontSmoothing: 'antialiased',
      maxWidth: ['100%', '100%', 414]
    },
    checkboxLabel: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: 1,
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '40px',
      WebkitFontSmoothing: 'antialiased'
    }
  },
  buttons: {
    secondary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 0,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      py: 0,
      px: 4,
      padding: '0 24px',
      height: '32px',
      borderRadius: 32,
      cursor: 'pointer',
      backgroundColor: 'lighterGray',
      color: 'darkerGray',
      WebkitFontSmoothing: 'antialiased',
      textDecoration: 'none',
      transition: 'all .2s',
      '&:hover': {
        backgroundColor: 'lightGray',
        color: 'darkerGray'
      }
    },
    primary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 2,
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      height: '62px',
      py: 0,
      px: 7,
      borderRadius: 32,
      letterSpacing: '0.008em',
      cursor: 'pointer',
      backgroundColor: 'electricBlue',
      color: 'white',
      WebkitFontSmoothing: 'antialiased',
      whiteSpace: 'nowrap',
      transition: 'all .2s',
      '&:hover': {
        backgroundColor: 'electricBlueHover'
      }
    }
  },
  forms: {
    textInputError: {
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: 1,
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      '&:focus, &:hover': {
        outlineColor: 'navyGray',
        outlineWidth: 2,
        outlineStyle: 'auto'
      },
      '::-ms-expand': {
        display: 'none'
      },
      color: 'navyGray',
      borderColor: 'red',
      backgroundColor: 'lightRed',
      // HACK: colorize webkit autocomplete input fields
      WebkitBoxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${'lightRed'}`,
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInputErrorDisabled: {
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: 1,
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      '&:focus, &:hover': {
        outlineColor: 'navyGray',
        outlineWidth: 2,
        outlineStyle: 'auto'
      },
      '::-ms-expand': {
        display: 'none'
      },
      color: 'darkGray',
      borderColor: 'red',
      backgroundColor: 'lightRed',
      // HACK: colorize webkit autocomplete input fields
      WebkitBoxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${'lightRed'}`,
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInputDisabled: {
      opacity: 0.4,
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: 1,
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      '::-ms-expand': {
        display: 'none'
      },
      color: 'darkGray',
      borderColor: 'gray',
      // HACK: colorize webkit autocomplete input fields
      boxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white',
      '&::placeholder': {
        color: 'darkGray'
      }
    },
    textInput: {
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: 1,
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      '&:focus, &:hover': {
        outlineColor: 'navyGray',
        outlineWidth: 2,
        outlineStyle: 'auto'
      },
      '::-ms-expand': {
        display: 'none'
      },
      color: 'navyGray',
      borderColor: 'gray',
      // HACK: colorize webkit autocomplete input fields
      boxShadow:
        'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white',
      '&::placeholder': {
        color: 'darkGray'
      }
    }
  }
}
