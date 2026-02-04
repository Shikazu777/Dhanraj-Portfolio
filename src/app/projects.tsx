"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { url } from "inspector";

const PROJECTS = [
    {
    img: `${getImagePrefix()}image/campus.png`,
    title: "All in one Campus App for Students",
    desc: "(work in progress)A comprehensive campus application designed to streamline student activities, including canteen food ordering, trust score value, and event management and also includes admin panel for managing the app efficiently by RBAC.",
    url: "https://github.com/Shikazu777/campus-app",
  },
  {
    img: `${getImagePrefix()}image/pixel.png`,
    title: "Pixel Portfolio Website",
    desc: "A mini rpg style portfolio made with Vite JS inspired by old Pokemon emulator games.",
    url: "https://dhanraj-pixel-portfolio.vercel.app/",
  },
  {
    img: `${getImagePrefix()}image/clinicappointment.png`,
    title: "Clinc Appointment SPA",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    url: "https://clinic-appointment-bmmt.vercel.app/",
  },
  {
    img: `${getImagePrefix()}image/tictactoe.png`,
    title: "TIC TAC TOE Game",
    desc: "a basic application using HTML,CSS and JavaScript.",
    url: "https://prodigy-wd-3-mocha.vercel.app/",
  },
  {
    img: `${getImagePrefix()}image/stopwatch.png`,
    title: "Stopwatch",
    desc: "This is my 1st app ever i made when i begin to learn Coding, its still basic but happy to show where i begin ",
    url: "",
  },

  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    url: "",
  },

];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          I have showcased my Personal Projects here, these will be updated and added as i come up with new ideas as Web Applications.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
