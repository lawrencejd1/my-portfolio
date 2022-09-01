import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
            
            <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-white">
              Hi, I'm Jesse Lawrence.
              <hr className="m-10"></hr>
              A Software Developer Located in Denver, Colorado.
            </h1>
            
            
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }