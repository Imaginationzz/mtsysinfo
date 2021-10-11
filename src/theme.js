import { themeProvider, createTheme } from "@material-ui/core"
import { purple } from "@material-ui/core/colors"

const theme = createTheme({

    palette: {
        primary: {
            main: "#022f40",
        },
        secondary: {
            main: "#fff",
        },
        background: {
            default: "#fff",
        },
        typography: {

            fontFamily: 'Lobster',
        }
    }

})

export default theme