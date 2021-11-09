import React from 'react';

export default function Resume() {
  return (
    <section>
      <div className="text-center mb-20">
        <a
          className="download "
          href="https://drive.google.com/uc?export=download&id=1fR6FpIPe0sDAepiJ39HUEuBcijbXWzdz"
        >
          Click here to download my resume
        </a>
      </div>
      <iframe
        src="https://drive.google.com/file/d/1fR6FpIPe0sDAepiJ39HUEuBcijbXWzdz/preview"
        allow="autoplay"
        title="Ronald Arceo Resume"
        height="500" width="100%"
      ></iframe>
    </section>
  )
}