
import './modules.css';

import texts from '../../data/texts.js';

//

const container = document.createElement('DIV');
container.classList.add('info-module', 'contact');

// title

const title = document.createElement('H2');
title.append( texts.modules.contact.title );

container.append( title );

// speech

const speech = document.createElement('P');
speech.append( texts.modules.contact.speech );

// prices

// const hourlyRate = document.createElement('P');
// hourlyRate.append( texts.modules.contact.hourlyRate );

// links

const mailLink = document.createElement('A');
mailLink.target = "_blank";
mailLink.ondragstart = () => { return false }
mailLink.href = 'mailto:kevinnroan@gmail.com';

const mailIcon = document.createElement('I');
mailIcon.classList.add('fa', 'fa-envelope');

const mailText = document.createElement('P');
mailText.innerHTML = 'kevinnroan@gmail.com';

mailLink.append( mailIcon, mailText );

//

const githubLink = document.createElement('A');
githubLink.target = "_blank";
githubLink.ondragstart = () => { return false }
githubLink.draggable = "false";
githubLink.href = 'https://github.com/realitian';

const githubIcon = document.createElement('I');
githubIcon.classList.add('fa', 'fa-github');

githubLink.append( githubIcon, 'Github' );

//

const linkedinLink = document.createElement('A');
linkedinLink.target = "_blank";
linkedinLink.ondragstart = () => { return false }
linkedinLink.draggable = "false";
linkedinLink.href = 'https://www.linkedin.com/in/kevin-roan-09356b166/';

const linkedinIcon = document.createElement('I');
linkedinIcon.classList.add('fa', 'fa-linkedin-square');

linkedinLink.append( linkedinIcon, 'Linkedin' );

//

container.append( speech, /* hourlyRate, */ mailLink, githubLink, linkedinLink );

//

export default container
