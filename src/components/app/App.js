import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import { lightTheme, darkTheme } from '../../Themes';
import lightLogo from '../../assets/images/logo-light.png';
import darkLogo from '../../assets/images/logo-dark.png';
import OutsideAlterter from '../OutsideAlerter'; 
import Navbar from '../navbar/Navbar';
import Project from './../project/Project';
import Menu from './../menu/Menu';
import { socialLinks } from '../../Constants';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isDarkMode: true,
      menuOpen: true
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
    this.handleMenuButton = this.handleMenuButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let isMobile = windowWidth < 960;
    let menuOpen = isMobile ? this.state.menuOpen : false
    this.setState({ isMobile, menuOpen });
  }

  handleThemeSwitch(event) {
    let isDarkMode = event.target.checked;
    this.setState({ isDarkMode });
  }

  handleMenuButton(event) {
    let menuNotOpen = !this.state.menuOpen;
    if (menuNotOpen) {
      this.setState({ menuOpen: true });
    }
  }

  handleCloseButton(event) {
    let menuOpen = this.state.menuOpen;
    if (menuOpen) {
      this.setState({ menuOpen: false });
    }
  }

  handleClickOutside() {
    let menuOpen = this.state.menuOpen
    if (menuOpen) { this.setState({ menuOpen: false }) };
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;
    const logo = this.state.isDarkMode ? lightLogo : darkLogo;
    
    return (
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div className="max-width-container">
            <Navbar
              logo={logo}
              links={socialLinks}
              isMobile={this.state.isMobile}
              isDarkMode={this.state.isDarkMode} 
              onSwitchChange={this.handleThemeSwitch}
              onButtonClick={this.handleMenuButton}
            />

            <OutsideAlterter handleClickOutside={this.handleClickOutside}>
              <Menu 
                open={this.state.menuOpen}
                links={socialLinks}
                isDarkMode={this.state.isDarkMode} 
                onSwitchChange={this.handleThemeSwitch}
                onButtonClick={this.handleCloseButton}
              />
            </OutsideAlterter>
          </div>
          
          {/* <div className="App">
            <div className="header">
              <Navbar 
                isMobile={this.state.isMobile}
                isDarkMode={this.state.isDarkMode} 
                onSwitchChange={this.handleThemeSwitch}
                onButtonClick={this.handleMenuButton}
              />
            </div>

            <OutsideAlterter handleClickOutside={this.handleClickOutside}>
              <Menu open={this.state.menuOpen} />
            </OutsideAlterter>

            <div className="main">
              <div className="max-width-container">
                <Project />
              </div>
            </div>
          </div> */}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
