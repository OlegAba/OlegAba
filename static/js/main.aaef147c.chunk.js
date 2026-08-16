(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(7),o=a.n(r),l=a(3),c=a(15);a(40);const s=l.b`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
  }

  body {
    background: ${e=>{let{theme:t}=e;return t.background}};
    color: ${e=>{let{theme:t}=e;return t.body}};
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    transition: background 0.2s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${e=>{let{theme:t}=e;return t.title}};
  }

  h1 {
    font-size: 40px;
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: -20px;
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    h1 {
      margin-bottom: -12.5px;
      font-size: 25px;
    }
  }

  h4 {
    font-size: 18px;
    padding-tip: 10px;
    padding-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  ul {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
    margin-top: 5px;
    line-height: 1.5;

    li {
      font-size: 16px;
      margin-bottom: 6px;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 12px;
      color: ${e=>{let{theme:t}=e;return t.accent}};

      span {
        color: ${e=>{let{theme:t}=e;return t.body}};
      }
    }
  }

  .max-width-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 0 24px;
  }

  .section-container {
    padding-top: 80px;
    padding-bottom: 36px;
  }

  .projects-container {
    margin-top: 80px;
  }

  .footer-container {
    margin-top: 80px;
  }

  .box-section {
    background-color: ${e=>{let{theme:t}=e;return t.secondaryBackground}};
    border-radius: 2px;
  }

  .image-container {
    padding-top: 80px;
    padding-bottom: 80px;

    img {
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .grid-column {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 48px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media ${e=>{let{device:t}=e;return t.mobileL}} {
    .grid-column {
      padding: 24px;
    }

    .max-width-container {
      padding: 0 12px 0 12px;
    }
  }
`,d={body:"#7b7b80",title:"#1b1b1d",button:"#707070",buttonHover:"black",background:"#fafafd",secondaryBackground:"#f3f3f6",backgroundActive:"#e5e5ea",accent:"#007aff",secondaryAccent:"#c0d9f5"},m={body:"#8D8D8D",title:"#F0F2F3",button:"#707070",buttonHover:"#F0F2F3",background:"#141414",secondaryBackground:"#171717",backgroundActive:"#1b1b1b",accent:"#0a84ff",secondaryAccent:"#152a44"},p="2560px",g={mobileS:`(max-width: ${"320px"})`,mobileM:`(max-width: ${"375px"})`,mobileL:`(max-width: ${"430px"})`,tablet:`(max-width: ${"960px"})`,laptop:`(max-width: ${"1024px"})`,laptopL:`(max-width: ${"1440px"})`,desktop:`(max-width: ${p})`,desktopL:`(max-width: ${p})`};var u=a(9),h=a(20);const b=[{title:"Github",icon:u.a,url:"https://github.com/OlegAba"},{title:"Email",icon:h.a,url:"mailto:contact@olegaba.com"}],x={title:"Oleg Aba",image:{source:"https://avatars.githubusercontent.com/u/19398259",description:"avatar"},description:"A Full-Stack Web and iOS developer. I am passionate about using technology to solve problems and make a positive impact on the world. On GitHub, you can find some of my personal projects and contributions to open source software. I am always looking to learn and collaborate with others, so feel free to reach out to me!"},f={title:"InstaQR",mainImage:"images/InstaQR/instaqr-1.png",secondaryImages:["images/InstaQR/instaqr-2.png","images/InstaQR/instaqr-3.png","images/InstaQR/instaqr-4.png","images/InstaQR/instaqr-5.png","images/InstaQR/instaqr-6.png","images/InstaQR/instaqr-7.png"],about:"InstaQR generates a live wallpaper by combining an image of your choice with \n  a scannable QR code. The QR code stores your share action (any link such as a social \n  media profile) and stays hidden until the live wallpaper is activated. Simply press into \n  the screen from your lock screen and have the person you would like to share with scan \n  the barcode from their camera app.",learned:["Built a public Cocoapods Swift library","Utilized multithreading for asynchronous background tasks","Implemented an MVC and OOP design pattern","Created dynamic templates with input validation for popular shareable services","Setup Unit Tests using the XCTest framework","Distributed and beta-tested the application using Testflight","Built a barcode scanner with action validiation","Set AutoLayout programmatically to create modular and scalable views","Managed version control and handled code review, code fixes, and bug fixes","Published and actively maintaining the project on App Store Connect"],appleLink:{url:"https://apps.apple.com/us/app/instaqr-live-wallpaper-maker/id1514732973?ign-mpt=uo%3D4",image:{source:"images/badge-lrg.svg",description:"Download on iTunes"}},githubLink:{title:"Github",icon:u.a,url:"https://github.com/OlegAba/InstaQR"}},v=[{title:"LPLivePhotoGenerator",image:"images/Projects/LPLivePhotoGenerator.png",url:"https://github.com/OlegAba/LPLivePhotoGenerator"},{title:"SuperSnapcode",image:"images/Projects/SuperSnapcode.png",url:"https://github.com/OlegAba/SuperSnapcode"},{title:"Timestamp API",image:"images/Projects/API-1.png",url:"https://timestamp-microservice.fly.dev/"}],k=l.c.nav`
  padding: 20px 0 20px 0;
  margin-top: 10px;

  .navbar-container {
    display: flex;
    height: 26px;
    align-items: flex-start;

    .nav-logo {
      flex: 1;
      min-width: 0;
      opacity: 0;

      img {
        height: 26px;
      }
    }

    .nav-links {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin: 0 20px;
        text-decoration: none;
        transition: color 0.1s linear;
        color: ${e=>{let{theme:t}=e;return t.button}};

        &:hover {
          color: ${e=>{let{theme:t}=e;return t.buttonHover}};
        }
      }
    }

    .nav-toggle {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .nav-menu {
      height: 100%;
      color: ${e=>{let{theme:t}=e;return t.title}};
    }
  }
`;var w=a(5);const y=l.c.a`
  display: flex;
  align-items: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 14px;

  .navLink-icon {
    margin-right: ${e=>{let{hasTitle:t}=e;return t?"10px":"0"}};
  }
`;var E=e=>{let{Icon:t,title:a,...n}=e;const r=void 0!==a;return i.a.createElement(y,Object.assign({hasTitle:r},n),i.a.createElement(t,{className:"navLink-icon",size:"20px"}),a)};l.c.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    display: grid;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    height: 26px;
    width: 26px;
    z-index: 1;
  }

  .icon {
    grid-column: 1;
    grid-row: 1;
    color: ${e=>{let{theme:t}=e;return t.title}};
    z-index: 3;
    background-color: ${e=>{let{theme:t}=e;return t.background}};
    width: 35px;
    height: 35px;
    padding: 8px;
    border-color: ${e=>{let{theme:t}=e;return t.secondaryAccent}};
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }

  .sun {
    border-color: ${e=>{let{theme:t}=e;return t.secondaryAccent}};
    background-color: ${e=>{let{theme:t}=e;return t.backgroundActive}}
  }

  .moon {
    border-color: ${e=>{let{theme:t}=e;return t.backgroundActive}};
    color: ${e=>{let{theme:t}=e;return t.accent}};
  }

  .ball {
    background-color: ${e=>{let{theme:t}=e;return t.secondaryBackground}};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    z-index: 2;
  }

`;a(22),a(21);var $=e=>{let{logo:t,links:a,isMobile:n,isDarkMode:r,onSwitchChange:o,onButtonClick:l,...c}=e;const s=i.a.createElement("div",{className:"nav-logo"},i.a.createElement("img",{src:t,alt:"logo"})),d=i.a.createElement("div",{className:"nav-links"},a.map((e,t)=>i.a.createElement(E,{key:t,Icon:e.icon,title:e.title,href:e.url,target:"_blank",rel:"noopener noreferrer"}))),m=i.a.createElement(w.b,{className:"nav-menu",size:"25px",onClick:l}),p=i.a.createElement("div",{className:"navbar-container"},d);let g=n?i.a.createElement("div",{className:"navbar-container"},s,m):p;return i.a.createElement(k,c,g)};const O=l.c.nav`
  background: ${e=>{let{theme:t}=e;return t.backgroundActive}};
  transform: ${e=>{let{open:t}=e;return t?"translateX(0)":"translateX(100%)"}};
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  .menu-header-container {
    padding: 20px 24px 20px 24px;
    
    .menu-close {
      color: ${e=>{let{theme:t}=e;return t.title}};
      float: right;
    }
  }

  .menu-buttons-container {
    margin-top: 70px;
    display: inline-block;
    width: 100%;
    background-color: ${e=>{let{theme:t}=e;return t.background}};

    .menu-link {
      display: flex;
      margin-bottom: 2px;
      padding: 20px 0 20px 0;
      justify-content: center;
      background-color: ${e=>{let{theme:t}=e;return t.backgroundActive}};
    }

    a {
      text-decoration: none;
      transition: color 0.1s linear;  
      height: 30px;
      color: ${e=>{let{theme:t}=e;return t.button}};

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.buttonHover}};
      }
    }
  }
`;var j=e=>{let{open:t,links:a,isDarkMode:n,onSwitchChange:r,onButtonClick:o,...l}=e;const c=!!t;return i.a.createElement(O,Object.assign({open:t,"aria-hidden":!c},l),i.a.createElement("div",{className:"menu-header-container"},i.a.createElement(w.a,{className:"menu-close",size:"25px",onClick:o})),i.a.createElement("div",{className:"menu-buttons-container"},a.map((e,t)=>i.a.createElement("div",{className:"menu-link",key:t},i.a.createElement(E,{Icon:e.icon,title:e.title,href:e.url,target:"_blank",rel:"noopener noreferrer"})))))};class S extends n.Component{constructor(e){super(e),this.setWrapperRef=this.setWrapperRef.bind(this),this.handleClickOutside=this.handleClickOutside.bind(this)}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}setWrapperRef(e){this.wrapperRef=e}handleClickOutside(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.props.handleClickOutside()}render(){return i.a.createElement("div",{ref:this.setWrapperRef},this.props.children)}}const I=l.c.div`
  .image-container img {
    padding-left: 45px;
    padding-right: 45px;
    max-width: 100%;
    width: 400px;
    border-radius: 50%;
  }

  .info-grid {
    margin-top: 4px;
    display: grid;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    .info-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;

      p {
        padding-bottom: 0;
      }
    }
  }
`;var N=e=>{let{about:t,device:a,...n}=e;return i.a.createElement(I,Object.assign({device:a},n),i.a.createElement("h1",null,t.title),i.a.createElement("div",{className:"box-section image-container"},i.a.createElement("img",{src:t.image.source,alt:t.image.title})),i.a.createElement("div",{className:"info-grid"},i.a.createElement("div",{className:"box-section grid-column"},i.a.createElement("div",null,i.a.createElement("h4",null,"Bio"),i.a.createElement("p",null,t.description)))))};const C=l.c.div`
  .image-container img {
    width: 70%;
  }

  .image-grid {
    display: grid;
    margin-top: 4px;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  .image-grid-col {
    padding: 24px;
    cursor: pointer;
    
    img {
        display: block;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    &:hover {
      background-color: ${e=>{let{theme:t}=e;return t.backgroundActive}};
    }
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    .image-grid {
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media ${e=>{let{device:t}=e;return t.mobileL}} {
    .image-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  .info-grid {
    margin-top: 4px;
    display: grid;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 0.5fr 1fr;
    grid-template-columns: 0.5fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;

    p {
      padding-bottom: 20px;
    }
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    .info-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;

      p {
        padding-bottom: 0;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .button-grid {
    display: flex;
    justify-content: space-around;

    a {
      transition: all .1s linear;
    }

    .link-button {
      color: ${e=>{let{theme:t}=e;return t.accent}};
      background-color: ${e=>{let{theme:t}=e;return t.secondaryAccent}};
      text-decoration: none;
      padding: 10px;
      margin-left: 20px;
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      border-color: ${e=>{let{theme:t}=e;return t.accent}};
      transition: all .1s linear;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.title}};
        background-color: ${e=>{let{theme:t}=e;return t.accent}};
      }
    }
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    .button-grid {
      margin-top: 40px;
      justify-content: center;
    }
  }

  @media ${e=>{let{device:t}=e;return t.mobileM}} {
    .button-grid {
      height: auto;
      flex-direction: column;
      justify-items: center;
      margin-right: auto;
      margin-left: auto;
      margin-top: 40px;

      .link-button {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 135px;
      }
    }
  }

`;var M=e=>{let{device:t,project:a,handleImageClick:n,...r}=e;const o=i.a.createElement("div",{className:"image-grid"},a.secondaryImages.map((e,t)=>i.a.createElement("div",{key:t,className:"box-section image-grid-col",onClick:n.bind(void 0,t)},i.a.createElement("img",{src:e,alt:t+"-preview"})))),l=i.a.createElement("ul",null,a.learned.map((e,t)=>i.a.createElement("li",{key:t},i.a.createElement("span",null,e))));return i.a.createElement(C,Object.assign({device:t},r),i.a.createElement("h1",null,a.title),i.a.createElement("div",{className:"box-section image-container"},i.a.createElement("img",{src:a.mainImage,alt:"Project header"})),i.a.createElement("div",{className:"info-grid"},i.a.createElement("div",{className:"box-section grid-column"},i.a.createElement("div",null,i.a.createElement("h4",null,"About"),i.a.createElement("p",null,a.about)),i.a.createElement("div",{className:"button-container"},i.a.createElement("div",{className:"button-grid"},i.a.createElement("a",{href:a.appleLink.url},i.a.createElement("img",{src:a.appleLink.image.source,alt:a.appleLink.image.description})),i.a.createElement(E,{className:"link-button",Icon:a.githubLink.icon,title:a.githubLink.title,href:a.githubLink.url,target:"_blank",rel:"noopener noreferrer"})))),i.a.createElement("div",{className:"box-section grid-column"},i.a.createElement("h4",null,"Accomplishments"),l)),o)};const L=l.c.div`  
  .projects-grid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;

    a, a:hover, a:active, a:visited, a:focus {
      text-decoration:none;
    }

    .projects-grid-col {
      position: relative;
      overflow: hidden;

      &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.backgroundActive}};
      }

      .link-container {
        padding-top: 20px;
      }

      h4 {
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: center;
      }

      .image-container {
        padding: 20px 40px 0 40px;
        margin-right: auto;
        margin-left: auto;

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    .projects-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media ${e=>{let{device:t}=e;return t.mobileL}} {
    .projects-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }
`;var A=e=>{let{device:t,projects:a,...n}=e;return i.a.createElement(L,Object.assign({device:t},n),i.a.createElement("div",{className:"projects-grid"},a.map((e,t)=>i.a.createElement("a",{className:"box-section projects-grid-col",href:e.url,key:t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"link-container"},i.a.createElement("h4",null,e.title),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:e.image,alt:e.title})))))))};const D=l.c.footer`
  padding: 36px 0 36px 0;
  display: flex;
  width: 100%;

  .copyright-container {
    flex: 1;
    color: ${e=>{let{theme:t}=e;return t.title}};
    font-weight: 500;
  }

  .links-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .link a {
      margin-left: 30px;
      text-decoration: none;
      transition: color 0.1s linear;
      color: ${e=>{let{theme:t}=e;return t.title}};

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.accent}};
      }
    }
  }

  @media ${e=>{let{device:t}=e;return t.tablet}} {
    flex-direction: column-reverse;

    .copyright-container {
      text-align: center;
      margin-top: 20px;
    }

    .links-container {
      justify-content: center;

      .link a {
        margin-right: 30px;
      }
    }
  }
`;var z=e=>{let{device:t,copyright:a,links:n,...r}=e;return i.a.createElement(D,Object.assign({device:t},r),i.a.createElement("div",{className:"copyright-container"},a),i.a.createElement("div",{className:"links-container"},n.map((e,t)=>i.a.createElement("div",{className:"link",key:t},i.a.createElement(E,{Icon:e.icon,href:e.url,target:"_blank"})))))};class R extends n.Component{constructor(e){super(e),this.updateWidth=()=>{let e=("undefined"!==typeof window?window.innerWidth:0)<960,t=!!e&&this.state.menuOpen;this.setState({isMobile:e,menuOpen:t})},this.handleThemeSwitch=e=>{let t=e.target.checked;this.setState({isDarkMode:t})},this.handleMenuButton=e=>{!this.state.menuOpen&&this.setState({menuOpen:!0})},this.handleCloseButton=e=>{this.state.menuOpen&&this.setState({menuOpen:!1})},this.handleClickOutside=()=>{this.state.menuOpen&&this.setState({menuOpen:!1})},this.handleImageClick=e=>{this.setState({imageDisplayOpen:!0,imageIndex:e})},this.state={isMobile:!1,isDarkMode:window.matchMedia("(prefers-color-scheme: dark)").matches,menuOpen:!1,imageDisplayOpen:!1,imageIndex:0}}componentDidMount(){this.updateWidth(),window.addEventListener("resize",this.updateWidth);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>this.setState({isDarkMode:e.matches}))}componentWillUnmount(){window.removeEventListener("resize",this.updateWidth)}render(){const e=this.state.isDarkMode?m:d,t=this.state.isDarkMode?"images/logo-light.png":"images/logo-dark.png",{imageDisplayOpen:a,imageIndex:n}=this.state,r=f.secondaryImages;return i.a.createElement(l.a,{theme:e},i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{device:g}),i.a.createElement("div",{className:"max-width-container"},i.a.createElement($,{logo:t,links:b,isMobile:this.state.isMobile,isDarkMode:this.state.isDarkMode,onSwitchChange:this.handleThemeSwitch,onButtonClick:this.handleMenuButton}),i.a.createElement(S,{handleClickOutside:this.handleClickOutside},i.a.createElement(j,{open:this.state.menuOpen,links:b,isDarkMode:this.state.isDarkMode,onSwitchChange:this.handleThemeSwitch,onButtonClick:this.handleCloseButton})),i.a.createElement("div",{className:"section-container"},i.a.createElement(N,{about:x,device:g})),i.a.createElement("div",{className:"section-container"},i.a.createElement(M,{device:g,project:f,handleImageClick:this.handleImageClick})),i.a.createElement("div",{className:"projects-container"},i.a.createElement(A,{device:g,projects:v})),i.a.createElement("div",{className:"footer-container"},i.a.createElement(z,{device:g,copyright:`\xa9 ${(new Date).getFullYear()} Oleg Aba - All rights reserved`,links:b}))),a&&i.a.createElement(c.a,{mainSrc:r[n],nextSrc:r[(n+1)%r.length],prevSrc:r[(n+r.length-1)%r.length],onCloseRequest:()=>this.setState({imageDisplayOpen:!1}),onMovePrevRequest:()=>this.setState({imageIndex:(n+r.length-1)%r.length}),onMoveNextRequest:()=>this.setState({imageIndex:(n+1)%r.length})})))}}var B=R;o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.aaef147c.chunk.js.map