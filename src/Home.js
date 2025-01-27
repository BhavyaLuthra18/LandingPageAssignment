import React, { useState } from "react";

/*--------------Components---------- */
import About from "./About";
import Contact from "./Contact";

/*-------------------------*React-icons------------------ */
import { LuPartyPopper } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

function Home() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      {/*-------------------Navbar-------------------- */}
      <div className="Navbar">
        {/*-------------SideImage and Weclome---------------- */}
        <div className="leftside">
          <img
            src="/images/JohnWeak.jpg"
            width={50}
            height={50}
            className="userimg"
            alt="user"
          />
          {/*-------Welcome Note for user---------- */}
          <div className="Welcomenote">
            <p>
              Hello Welcome <LuPartyPopper color="yellow" size={20} />
              <p>John Weak</p>
            </p>
          </div>
        </div>
        {/*----------Notifications Section----------*/}
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <IoMdNotifications color="white" size={40} />
          <span
            style={{
              position: "absolute",
              top: "1px",
              right: "1px",
              backgroundColor: "red",
              borderRadius: "50%",
              width: "14px",
              height: "14px",
            }}
          ></span>
        </div>
      </div>
      {/*--------------About Section------------- */}
      <About />
      {/*---------------Contact us Section--------------------------- */}
      <Contact />
      {/*--------------Tab Section------------------------- */}
      <div className="tabSection">
        {/*----------Home Tab---------------- */}
        <div className="tabs">
          <MdOutlineHome
            size={30}
            style={{
              transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>Home</p>
        </div>
        {/*------Compliance Tab---------------- */}
        <div className="tabs">
          <FiShield
            size={30}
            style={{
              transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>Compliance</p>
        </div>
        {/*----------Eligibility Tab---------------- */}
        <div className="tabs">
          <MdCheckCircle
            size={30}
            style={{
              transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>Eligibility</p>
        </div>
        {/*----------Resource Tab---------------- */}
        <div className="tabs">
          <FaRegFolderOpen
            size={30}
            style={{
              transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>Resource</p>
        </div>
        {/*----------Reminder Tab---------------- */}
        <div className="tabs">
          <FaRegCalendar
            size={30}
            style={{
              transform: hover ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>Reminder</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
