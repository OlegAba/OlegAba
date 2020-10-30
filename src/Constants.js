import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

import secondaryImage from './assets/images/projects/InstaQR/instaqr-1.png';

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
        url: "https://drive.google.com/file/d/1cL-XSkZbteQGCnAx6AUKdzgOiK3mnJm8/view"
    }
]

export const mainProject = {
    title: "InstaQR",
    mainImage: "images/projects/InstaQR/instaqr-1.png",
    secondaryImages: [
        "images/projects/InstaQR/instaqr-2.png", 
        "images/projects/InstaQR/instaqr-3.png", 
        "images/projects/InstaQR/instaqr-4.png", 
        "images/projects/InstaQR/instaqr-5.png", 
        "images/projects/InstaQR/instaqr-6.png", 
        "images/projects/InstaQR/instaqr-7.png"
    ],
    about: "Tipsy is a tip calculator that is the first app I built on my own, and it’s the first app I put on the app store. I definitely met some challenges when building it, but I was able to push through with some good use of DuckDuckGo and Google, as well as some help from friends that were generous with their time and patience. It was a lot of fun making Tipsy. I gained experience with some of Apple’s cool frameworks and features.",
    learned: [
        "How to use App Store Connect",
        "MessageUI, Contacts, ContactsUI, Social – For sending payment requests",
        "Utilizing Semantic Colors to support light & dark mode",
        "Custom quick actions from home screen app icon",
        "UserDefaults to store user settings",
        "Better acquainted with Storyboards & Auto-Layout",
        "Some CoreMotion"
    ],
    technologies: [
        "How to use App Store Connect",
        "MessageUI, Contacts, ContactsUI, Social – For sending payment requests",
        "Better acquainted with Storyboards & Auto-Layout",
        "Some CoreMotion"
    ],
    link: {
        title: "Github",
        icon: FaGithub,
        url: "https://github.com/OlegAba"
    }
}
