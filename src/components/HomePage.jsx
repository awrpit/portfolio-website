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
      <h1 className="text-3xl font-bold p-4">Hey, this is Arpit Sharma</h1>
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
          <a href="https://ripen.in/" target="_blank" rel="noreferrer">
            Ripen
          </a>
          <i> ( :chefs kiss 🤌🏻 ) </i> and as a freelance Alexa Skills Developer.{" "}
        </p>
      </p>
      <p className="text-xl px-4 py-2">
        If you've got a crazy idea to discuss or just want to say hi, I'd love
        to hear from you! Shoot me an email at{" "}
        <a
          href="mailto:arpitsharmaofficialll@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          arpitsharmaofficialll@gmail.com.{" "}
        </a>
        I'm always excited to meet new people and explore new opportunities.
      </p>
    </div>
  );
}

export default HomePage;
