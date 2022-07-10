import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as cn from "classnames";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        borderBottom: "1px solid #aaaaaa",
        marginBottom: 30,
        position: "absolute",
        top: 0,
        zIndex: 3,
        height: 65,
    },
    content: {
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "0px !important",
            paddingBottom: "0px !important",
            "& a" : {
                color: "black",
                textDecoration: "none",
            }
    },
    logotype: {
    },
    navigation: {
        "& a" : {
            color: "rgb(100,100,100)",
            textDecoration: "none",
            "&:hover": {
                color: "black",
            }
        }
    },
    coloredText: {
       color: "rgb(214, 111, 73)",
    }
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

const getSeason = () => {
    const date =  new Date();
    const seasonIdx = Math.floor((date.getMonth() / 12 * 4)) % 4;
    return ['Winter', 'Spring', 'Summer', 'Autumn'][seasonIdx];
}
//             <Link className="header-link-home" to="/">
//                 {title}
//             </Link>

    return (
        <div className={classes.container}>
         <div className={cn("global-wrapper", classes.content)}>
            <Link className={cn("header-link-home", classes.logotype)} to="/">
                <span className={classes.coloredText}>
                    {getSeason()},
                </span>
                <br/>
                Katowice, Polska.
            </Link>
            <div className={cn("header-link-home", classes.navigation)}>
                <Link to="/all">All articles</Link>
                {/* <Link to="/article">Article</Link> */}
            </div>
            </div>
        </div>
    )
}

export default Menu;