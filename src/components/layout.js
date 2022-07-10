import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HomePage from "./components/HomePage"
import Menu from "./components/Menu"


const Layout = ({
  isHomePage,
  children }) => {

  return (
    <div>
      <Menu />
      <div className="global-wrapper content-under-menu">
        <main>{children}</main>
      </div>

      <footer>
        <div className="global-wrapper">
          © {new Date().getFullYear()}  Upper Silesia Tourismus
        </div>
      </footer>

    </div>
  )
}

export default Layout
