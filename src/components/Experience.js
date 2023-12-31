import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl mb-2">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className=" font-medium w-full mt-2">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64 ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center ">
        Experience
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top "
        />
        <ul className=" w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Software Developer"
            company="The Rights"
            time="2022-present"
            address="Montclair, NJ"
            work="Working on a team (consisting of individuals with 25+ years experience in the Music Industry) on a music licensing start up responsible for automating the music licensing process.
             As one of two core developers, we build new front end features to allow for licensors/creators to easily navigate the process, as well as the necessary backend endpoints
             and data models in order to support these features."
            companyLink="www.therights.com"
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
