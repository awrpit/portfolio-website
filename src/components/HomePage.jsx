import React from "react";
import profile from "../assets/profile.jpeg";

function HomePage() {
  return (
    <div className="px-10 py-2">
      <img
        src={profile}
        alt="Arpit Sharma"
        className="rounded-full mx-auto p-5 h-64 w-64"
      />
      <h1 className="text-3xl font-bold p-4 text-slate-600">
        Hi, this is
        <span className="p-2 bg-gradient-to-r from-indigo-300 to-purple-400  text-transparent bg-clip-text">
          Arpit Sharma
        </span>
      </h1>
      <p className="text-xl p-4"> 📍 Delhi, India</p>
      <p className="text-xl p-4 ">
        I'm a 20-year-old, currently pursuing B.Com from Shaheed Bhagat Singh
        College. I'm passionate about all things tech, code, finance, computers,
        startups, books everything else in between.{" "}
      </p>
      <p className="text-xl px-4 py-2">
        I'm currently on the lookout for an internship
        <i> (read internship dedo) </i> as a full-stack/frontend developer.
        (Seriously though, if you know of any openings, check out my resume!)
        <p>
          In the past, I've worked as a community wizard @
          <a
            href="https://ripen.in/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Ripen
          </a>
          <i> ( :chefs kiss 🤌🏻 ) </i> and as a{" "}
          <span className="text-blue-500">
            {" "}
            Freelance Alexa Skills Developer.{" "}
          </span>
        </p>
      </p>
      <p className="text-xl px-4 py-2">
        If you've got a crazy idea to discuss or just want to say hi, I'd love
        to hear from you! Shoot me an email at{" "}
        <a
          href="mailto:arpitsharmaofficialll@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline p-1"
        >
          arpitsharmaofficialll@gmail.com
        </a>
        I'm always excited to meet new people and explore new opportunities.
      </p>
      <div>
        <button className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text p-4 rounded-md">
          <a href="https://cal.com/awrpit" target="_blank" rel="noreferrer">
            Let's Talk @cal
          </a>
        </button>
        <button className="text-2xl font-bold bg-gradient-to-l from-indigo-300 to-purple-400 text-transparent bg-clip-text p-4 rounded-md">
          <a href="/" target="_blank" rel="noreferrer">
            Check my Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
