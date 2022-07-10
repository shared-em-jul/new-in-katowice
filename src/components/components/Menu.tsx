import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        borderBottom: "1px solid #aaaaaa",
        marginBottom: 30,
        padding: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        zIndex: 3,
        height: 65,
    },
}));

interface MenuProps {
}

const Menu: React.FC<MenuProps> = (props) => {
    const classes = useStyles();

    const {
        wp: {
            generalSettings: { title },
        },
    } = useStaticQuery(graphql`
        query LayoutQuery {
          wp {
            generalSettings {
              title
              description
            }
          }
        }
      `)

    return (
        <div className={classes.container}>
            <Link className="header-link-home" to="/">
                {title}
            </Link>
            <div>
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/article">Article</Link> */}
            </div>
        </div>
    )
}

export default Menu;