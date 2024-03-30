import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthenticated } = useContext(Context);
  return (
    <footer className={isAuthenticated ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By JobbiFy.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100030535"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@LollzZZGaming"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/singh-garvit/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/singhgarvit"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;