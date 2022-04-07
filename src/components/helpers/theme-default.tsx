import { createTheme } from '@mui/material/styles'

const properties = {
    primary: '#61DAFC',
    secondary: '#282c34',
    background_primary: '#b4dbe6',
    background_secondary: '#a7b3ca',
    primary_dark: '#2b6170',
    text: '#737373',
    borderRadius: {
        buttons: '6px',
        chips: '10px'
    }
}
const themeDefault = createTheme({
    typography: {
        fontFamily: ['"Work Sans"', 'san-serif'].join(','),
        h1: {
            color: properties.primary,
            fontWeight: 300,
            fontSize: '5rem'
        },
        h2: {
            color: properties.primary,
            fontWeight: 700,
            fontSize: '1.5rem',
            textTransform: 'uppercase'
        }
    },
    palette: {
        primary: {
            main: properties.primary,
            light: properties.background_primary,
            dark: properties.primary_dark,
            contrastText: 'white',
        },
        secondary: {
            main: properties.secondary,
            light: properties.background_secondary,
            contrastText: 'white'
        },
        info: {
            main: '#fff'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none'
            }
        },
        MuiChip: {
            defaultProps: {
                variant: 'filled',
                size: 'small'
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState && {
                        fontWeight: 600,
                        fontSize: '.875rem',
                        textTransform: 'uppercase',
                        color: properties.primary,
                        borderRadius: properties.borderRadius.chips,
                        padding: '2px',
                        height: '28px'
                    })
                }),
                filled: ({ ownerState, theme }) => ({
                    ...(ownerState && {
                        backgroundColor: properties.background_primary,
                        border: 0
                    })
                })
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            }
        }
    }
})

export default themeDefault
