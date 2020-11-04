import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { device } from '../../styles/Device';
import lightLogo from '../../assets/images/logo-light.png';
import darkLogo from '../../assets/images/logo-dark.png';
import OutsideAlterter from '../OutsideAlerter'; 
import Navbar from '../navbar/Navbar';
import MainProject from '../mainProject/MainProject';
import OtherProjects from '../otherProjects/OtherProjects';
import Menu from './../menu/Menu';
import { socialLinks, mainProject, otherProjects } from '../../Constants';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isDarkMode: true,
      menuOpen: false,
      imageDisplayOpen: false,
      imageIndex: 0,
    };

    this.updateWidth = this.updateWidth.bind(this);
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
    this.handleMenuButton = this.handleMenuButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
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

  handleImageClick(index) {
    this.setState({
      imageDisplayOpen: true,
      imageIndex: index
    })
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;
    const logo = this.state.isDarkMode ? lightLogo : darkLogo;
    const { imageDisplayOpen, imageIndex } = this.state;
    const images = mainProject.secondaryImages
    
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

            <div className="main-container">
              <MainProject
                device={device}
                project={mainProject}
                handleImageClick={this.handleImageClick}
              />
            </div>

            <div className="other-projects-container">
              <OtherProjects
                device={device}
                projects={otherProjects}
              />
            </div>

          </div>

          {imageDisplayOpen && (
            <Lightbox
              mainSrc={images[imageIndex]}
              nextSrc={images[(imageIndex + 1) % images.length]}
              prevSrc={images[(imageIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ imageDisplayOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  imageIndex: (imageIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  imageIndex: (imageIndex + 1) % images.length,
                })
              }
              imagePadding={this.state.isMobile ? 45 : 10}
            />
          )}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
