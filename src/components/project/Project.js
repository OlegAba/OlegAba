import React, { Component } from 'react';
import headerImage from '../../assets/images/InstaQR-big.png'
import phoneThumbnail from '../../assets/images/thumbnail.png'
import './Project.scss';

class Project extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Project">
        <h1>InstaQR</h1>
        <div className="box-section image-container">
            <img src={headerImage} />
        </div>

        <div className="picture-grid">
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
          <div className="box-section picture-grid-col">
            <img src={headerImage} />
          </div>
        </div>

        <div className="info-grid">
          <div className="box-section info-grid-col">
            <div>
              <h4>About</h4>
              <p>Tipsy is a tip calculator that is the first app I built on my own, and it’s the first app I put on the app store. I definitely met some challenges when building it, but I was able to push through with some good use of DuckDuckGo and Google, as well as some help from friends that were generous with their time and patience. It was a lot of fun making Tipsy. I gained experience with some of Apple’s cool frameworks and features.</p>
            </div>
            <div className="button-grid">
            
            </div>
          </div>
          <div className="box-section info-grid-col">
            <h4>Things I Learned:</h4>
            <ul>
              <li>How to use App Store Connect</li>
              <li>MessageUI, Contacts, ContactsUI, Social – For sending payment requests</li>
              <li>Utilizing Semantic Colors to support light & dark mode</li>
              <li>Custom quick actions from home screen app icon</li>
              <li>UserDefaults to store user settings</li>
              <li>Better acquainted with Storyboards & Auto-Layout</li>
              <li>Some CoreMotion</li>
            </ul>

            <h4>Technologies Used:</h4>
            <ul>
              <li>How to use App Store Connect</li>
              <li>MessageUI, Contacts, ContactsUI, Social – For sending payment requests</li>
              <li>Better acquainted with Storyboards & Auto-Layout</li>
              <li>Some CoreMotion</li>
            </ul>
          </div>
        </div>

        <div className="projects-grid">
          <div className="box-section projects-grid-col">
            <h4>LPLivePhotoGenerator</h4>
            <img src={phoneThumbnail} />
          </div>
          <div className="box-section projects-grid-col">
            <h4>SuperSnapcode</h4>
            <img src={phoneThumbnail} />
          </div>
          <div className="box-section projects-grid-col">
            <h4>Podcast Explorer</h4>
            <img src={phoneThumbnail} />
          </div>
        </div>
      </div>
    )
  };
}

export default Project;