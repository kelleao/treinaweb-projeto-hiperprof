import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#6b2aee",
      dark: "#581ecd",
    },
    text: {
      primary: "#707070",
      secondary: "#9b9b9b",
    },
    error: {
      main: "#fc3c00",
    },
    warning: {
      main: "#fca600",
    },
    success: {
      main: "#00d34d",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          borderWidth: "2px",
          ":hover": {
            borderWidth: "2px",
          },
        },
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            padding: "16px 40px",
            backgroundColor: "#9661ff",
          },
        },
        {
          props: {
            variant: "outlined",
            color: "inherit",
          },
          style: {
            ":hover": {
              backgroundColor: "#9661ff",
            },
          },
        },
        {
          props: {
            variant: "outlined",
            color: "error",
          },
          style: {
            padding: "16px 40px",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(90deg, rgba(107,42,238,1))0%, rgba(2,0,36,1)100%)",
        },
      },
    },
  },
});

export default theme;
