import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const date = new Date();

  return (
    <div>
      <div className="flex flex-column justify-center pt-5">
        <a
          href="mailto:arpitsharmaofficialll@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faEnvelope}
          />
        </a>
        <a href="https://www.linkedin.com/in/arpitsh" target="_blank">
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faLinkedin}
          />
        </a>
        <a href="https://github.com/awrpit">
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faGithub}
          />
        </a>
        <a href="https://www.twitter.com/awrpit" target="_blank">
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faTwitter}
          />
        </a>
        <a href="https://www.instagram.com/in/awrpit" target="_blank">
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faInstagram}
          />
        </a>
        <a
          href="https://open.spotify.com/user/i1ddi3i0c2645dcxjn7tla8m2?si=e09fb8049112463d"
          target="_blank"
        >
          <FontAwesomeIcon
            className="h-7 text-zinc-800 hover:text-zinc-700 p-3"
            icon={faSpotify}
          />{" "}
        </a>
      </div>
      <p className="text-center text-slate-600 text-sm p-10 font-light">
        {date.getFullYear()} © Arpit Sharma
      </p>
    </div>
  );
}

export default Footer;
