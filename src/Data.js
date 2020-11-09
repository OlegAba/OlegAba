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
        url: "https://www.linkedin.com/in/olegabalonski/"
    },
    {
        title: "Email",
        icon: MdEmail,
        url: "mailto:olegaba.developer@gmail.com"
    },
    {
        title: "Resume",
        icon: IoMdDocument,
        url: "http://www.OlegAba.com/resume.pdf"
    }
]

export const mainProject = {
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
    the screen from your lockscreen and have the person you would like to share with to scan 
    the barcode from their camera app.`,
    learned: [
        "Built a public Cocoapods Swift library",
        "Utilized multithreading for asynchronous background tasks",
        "Implemented an MVC and OOP design pattern",
        "Created dynamic templates with input validation for popular shareable services",
        "Setup Unit Tests using the XCTest framework",
        "Distributed and beta-tested the application using Testflight",
        "Integrated 3rd party API’s",
        "Built a barcode scanner with action validiation",
        "Set AutoLayout programmatically to create modular and scalable views",
        "Managed version control and handled code review, code fixes, and bug fixes",
        "Published and actively maintaining the project on App Store Connect",
    ],
    link: {
        title: "Github",
        icon: FaGithub,
        url: "https://github.com/OlegAba/InstaQR"
    }
}

export const otherProjects = [
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
        title: "Podcast Explorer",
        image: "images/Projects/PodcastExplorer.png",
        url: "https://github.com/OlegAba/PodcastEpisodeExplorer"
    },
    {
        title: "Movie Explorer",
        image: "images/Projects/MovieExplorer.png",
        url: "https://github.com/OlegAba/movie-explorer"
    },
    {
        title: "Product Landing Page",
        image: "images/Projects/ProductLandingPage.png",
        url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/ProductLandingPage"
    },
    {
        title: "Technical Documentation",
        image: "images/Projects/TechnicalDocumentation.png",
        url: "https://olegaba.github.io/FCC-Responsive-Web-Design-Projects/TechnicalDocumentationPage/"
    },
]