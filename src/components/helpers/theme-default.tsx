import { createTheme } from '@mui/material/styles'

const properties = {
    primary: '#61DAFC',
    secondary: '#282c34',
    background_primary: '#a5d9e7',
    background_secondary: '#9aa6be',
    text: '#737373',
    borderRadius: {
        buttons: '6px',
        chips: '3px'
    }
}
const themeDefault = createTheme({
    typography: {
        fontFamily: ['"Work Sans"', 'san-serif'].join(','),
        h1: {
            color: properties.primary,
            fontWeight: 300,
            fontSize: '5rem'
        }
    },
    palette: {
        primary: {
            main: properties.primary,
            light: properties.background_primary,
            contrastText: 'white'
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
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'fixed'
            },
            styleOverrides: {
                root: {}
            }
        },
        MuiTypography: {
            styleOverrides: {
                h2: ({ ownerState, theme }) => ({
                    ...(ownerState && {}),
                    [`& span`]: {
                        display: 'block',
                        color: '#000'
                    }
                }),
                h5: ({ ownerState }) => ({
                    ...(ownerState && {
                        lineHeight: '1em'
                    }),
                    [`& span`]: {
                        display: 'block',
                        color: '#000'
                    }
                })
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState && {
                        padding: [theme.spacing(1), theme.spacing(4)].join(' '),
                        borderRadius: properties.borderRadius.buttons
                    })
                }),
                sizeSmall: ({ ownerState, theme }) => ({
                    ...(ownerState && {
                        fontWeight: 400
                    })
                })
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
                        fontWeight: 400,
                        fontSize: '.75rem',
                        textTransform: 'uppercase',
                        color: properties.primary,
                        border: `1px solid ${properties.primary}`,
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
