import React from 'react';

export default function Resume() {
  return (
    <section>
      <h3>Front-End Proficiencies:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3>Back-End Proficiencies:</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
      <iframe
        src="https://drive.google.com/file/d/1fR6FpIPe0sDAepiJ39HUEuBcijbXWzdz/preview"
        allow="autoplay"
        title="Ronald Arceo Resume"
        height="500" width="100%"
      ></iframe>
      <a
        className="download "
        href="https://drive.google.com/uc?export=download&id=1fR6FpIPe0sDAepiJ39HUEuBcijbXWzdz"
      >
        Download Here
      </a>
    </section>
  )
}