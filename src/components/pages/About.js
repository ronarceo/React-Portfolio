import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed">
          Full stack web developer that specializes in HTML, CSS, JavaScript, and React on the front end and Node, Express, SQL, and MongoDB on the back end.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="profile"
            src="./profile pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}