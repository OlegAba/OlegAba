import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

export const socialLinks = [
  {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OlegAba"
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/olegaba/"
  },
  {
    title: "Email",
    icon: MdEmail,
    url: "mailto:contact@olegaba.com"
  },
  // {
  //   title: "Resume",
  //   icon: IoMdDocument,
  //   url: "http://www.OlegAba.com/resume.pdf"
  // }
]

export const about = {
  title: "Oleg Abalonski",
  image: {
      source: 'https://avatars.githubusercontent.com/u/19398259',
      description: 'avatar'
  },
  description: `A Full-Stack Web and iOS developer. I am passionate about using technology to solve problems and make a positive impact on the world. On GitHub, you can find some of my personal projects and contributions to open source software. I am always looking to learn and collaborate with others, so feel free to reach out to me!`
}

export const instaQR = {
  title: "InstaQR",
  mainImage: "images/InstaQR/instaqr-1.png",
  secondaryImages: [
    "images/InstaQR/instaqr-2.png", 
    "images/InstaQR/instaqr-3.png", 
    "images/InstaQR/instaqr-4.png", 
    "images/InstaQR/instaqr-5.png", 
    "images/InstaQR/instaqr-6.png", 
    "images/InstaQR/instaqr-7.png"
  ],
  about: `InstaQR generates a live wallpaper by combining an image of your choice with 
  a scannable QR code. The QR code stores your share action (any link such as a social 
  media profile) and stays hidden until the live wallpaper is activated. Simply press into 
  the screen from your lock screen and have the person you would like to share with scan 
  the barcode from their camera app.`,
  learned: [
    "Built a public Cocoapods Swift library",
    "Utilized multithreading for asynchronous background tasks",
    "Implemented an MVC and OOP design pattern",
    "Created dynamic templates with input validation for popular shareable services",
    "Setup Unit Tests using the XCTest framework",
    "Distributed and beta-tested the application using Testflight",
    "Built a barcode scanner with action validiation",
    "Set AutoLayout programmatically to create modular and scalable views",
    "Managed version control and handled code review, code fixes, and bug fixes",
    "Published and actively maintaining the project on App Store Connect",
  ],
  appleLink: {
    url: "https://apps.apple.com/us/app/instaqr-live-wallpaper-maker/id1514732973?ign-mpt=uo%3D4",
    image: {
      source: "images/badge-lrg.svg",
      description: "Download on iTunes"
    }
  },
  githubLink: {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/OlegAba/InstaQR"
  }
}

export const projects = [
  {
    title: "LPLivePhotoGenerator",
    image: "images/Projects/LPLivePhotoGenerator.png",
    url: "https://github.com/OlegAba/LPLivePhotoGenerator"
  },
  {
    title: "SuperSnapcode",
    image: "images/Projects/SuperSnapcode.png",
    url: "https://github.com/OlegAba/SuperSnapcode"
  },
  {
    title: "Timestamp API",
    image: "images/Projects/API-1.png",
    url: "https://timestamp-microservice.fly.dev/"
  },
  {
    title: "Request Header Parser API",
    image: "images/Projects/API-2.png",
    url: "https://request-header-parser-microservice.fly.dev/"
  },
  {
    title: "URL Shortener API",
    image: "images/Projects/API-3.png",
    url: "https://url-shortener-microservice.fly.dev/"
  },
  {
    title: "Exercise Tracker API",
    image: "images/Projects/API-4.png",
    url: "https://exercise-tracker-fcc.fly.dev/"
  },
  {
    title: "File Metadata API",
    image: "images/Projects/API-5.png",
    url: "https://file-metadata-microservice.fly.dev/"
  },
  {
    title: "Podcast Explorer",
    image: "images/Projects/PodcastExplorer.png",
    url: "https://github.com/OlegAba/PodcastEpisodeExplorer"
  },
  // {
  //   title: "Movie Explorer",
  //   image: "images/Projects/MovieExplorer.png",
  //   url: "https://github.com/OlegAba/movie-explorer"
  // },
  // {
  //   title: "Product Landing Page",
  //   image: "images/Projects/ProductLandingPage.png",
  //   url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/ProductLandingPage"
  // },
  {
    title: "Technical Documentation",
    image: "images/Projects/TechnicalDocumentation.png",
    url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/TechnicalDocumentationPage/"
  },
]