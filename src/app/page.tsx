"use client";

import { handleContactForm } from "./actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Reveal } from "@/components/Reveal";
import { div } from "framer-motion/m";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Contents />
      <Footer />
    </div>
  );
}

function Navbar() {
  const menus = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Recent Work", id: "work" },
    { name: "Get in Touch", id: "contact" },
  ];
  const imgs = [
    {
      src: "githu.png",
      alt: "github icon",
      href: "https://github.com/Luthfi-AS",
    },
    {
      src: "linkedin.png",
      alt: "linked in icon",
      href: "https://www.linkedin.com/in/143401284/",
    },
    {
      src: "instagram.png",
      alt: "instagram icon",
      href: "https://instagram.com/lutthfi_as",
    },
  ];
  return (
    <nav className="fixed z-20 top-0 flex items-center p-8 text-gray-text bg-gray-box gap-8 font-ibm-plex-mono w-full">
      <div id="navigation-bar " className="mr-auto flex gap-12 ml-20">
        {menus.map((menu) => (
          <a
            key={menu.id}
            href={`#${menu.id}`}
            className="hover:cursor-pointer hover:text-white transition-colors"
          >
            {menu.name}
          </a>
        ))}
      </div>
      <div id="image-bar" className="flex ml-auto gap-6 ">
        {imgs.map((img) => (
          <a
            key={img.src}
            href={img.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-6 h-6 object-contain"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="flex relative items-center p-6 justify-center">
      <p id="copyright">
        © 2025 Muhammad Luhtfi Aziz Sunarya. All rights reserved. Created with
        Next.js
      </p>
    </footer>
  );
}

function Contents() {
  return (
    <main className="grid items-center">
      <ProfileCard />
      <AboutMe />
      <AwardsAndAchievements />
      <RecentWork />
      <GetInTouch />
    </main>
  );
}

function ProfileCard() {
  return (
    <main>
      <Reveal>
        <div
          id="home"
          className=" bg-gray-box shadow-box ml-20 mr-20 mt-20 mb-20 flex gap-6 border border-gray-text/59 scroll-mt-scroll-offset"
        >
          <div id="profile-text-area" className=" grid gap-7 ml-7 w-1/2">
            <p className="text-white font-extrabold mt-10 text-5xl text-left">
              Muhammad Luhtfi Aziz Sunarya
            </p>
            <h4 className="font-ibm-plex-mono text-gray-text text-justify">
              Informatics Engineering student at Universitas Padjadjaran with
              strong interest in data science, machine learning, and software
              engineering. Experienced in organizational leadership and
              large-scale project management with proven ability to lead teams,
              design strategies, and deliver high-impact programs. Seeking
              opportunities to apply analytical and technical skills in
              real-world technology solution
            </h4>
            <button className="border-yellow-stroke border-2 font-ibm-plex-mono font-bold w-1/3 h-1/2 mb-7 hover:bg-amber-900 hover:cursor-pointer rounded-md">
              Lets Get Started!
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="profile.png"
              alt="profile picture"
              className="mt-10 border-gray-stroke  rounded-md mb-7  place-self-center"
            ></img>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

function AboutMe() {
  return (
    <main>
      <div
        id="about"
        className="grid-cols-2 w-screen place-items-center scroll-mt-scroll-offset"
      >
        <Reveal>
          <div
            id="about-text-area"
            className="grid gap-6 size-1/3 place-items-center w-full"
          >
            <h2 className="font-abril-fatface font-bold text-3xl text-white text-center">
              About Me
            </h2>
            <h3 className="font-raleway text-center text-2xl text-white font-bold ">
              My Speciality
            </h3>
            <p className="text-justify indent-8 font-lato text-gray-text w-1/3">
              As an Informatics Engineering student, I have developed a balance
              of technical competencies and essential soft skills that enable me
              to solve problems effectively, adapt to new technologies, and
              collaborate in dynamic environments.
            </p>
          </div>
        </Reveal>

        <div id="about-box-area" className="grid gap-15 ml-20 mr-20">
          <Reveal>
            <div id="speciality-row-1" className="flex gap-15 mt-10">
              <section id="data-analysis" className="grid">
                <img src="data-logo.png" alt="logo-data" />
                <section className="grid gap-10 shadow-box bg-gray-box rounded-md">
                  <h2 className="text-white font-raleway text-2xl mt-10 ml-5">
                    Data Analysis
                  </h2>
                  <p className="font-ibm-plex-mono text-gray-text text-justify indent-8 ml-5 mr-5 mb-10">
                    I have expertise in data analysis, including data
                    processing, creating visualizations, and performing
                    interpretation to extract meaningful insights.
                  </p>
                </section>
              </section>
              <section id="leadership" className="grid ">
                <img src="leadership-logo.svg" alt="logo-leadership" />
                <section className=" grid bg-gray-box shadow-box rounded-md gap-10">
                  <h2 className="text-white font-raleway text-2xl ml-5 mt-10">
                    Leadership
                  </h2>
                  <p className="font-ibm-plex-mono text-gray-text text-justify indent-8 ml-5 mr-5 mb-10">
                    Through my experience, I have strengthened my leadership
                    skills, particularly in team collaboration, communication,
                    and guiding others toward shared goals.
                  </p>
                </section>
              </section>
            </div>
          </Reveal>

          <Reveal>
            <div id="speciality-row-2" className="flex gap-15">
              <section id="web-development" className="grid">
                <img src="data-web.png" alt="logo-web" />
                <section className="grid gap-10 shadow-box bg-gray-box rounded-md w-full">
                  <h2 className="text-white font-raleway text-2xl mt-10 ml-5">
                    Web Development
                  </h2>
                  <p className="font-ibm-plex-mono text-gray-text text-justify indent-8 ml-5 mr-5 mb-10">
                    I have hands-on experience developing full-stack website
                    app, from crafting designs to implementing front-end,
                    back-end, and database integrations.
                  </p>
                </section>
              </section>
              <section id="project-management" className="grid">
                <img src="pm-logo.svg" alt="logo-pm" />
                <section className=" grid bg-gray-box shadow-box rounded-md gap-10">
                  <h2 className="text-white font-raleway text-2xl ml-5 mt-10">
                    Project Management
                  </h2>
                  <p className="font-ibm-plex-mono text-gray-text text-justify indent-8 ml-5 mr-5 mb-10 ">
                    I have project management experience involving task
                    planning, timeline management, and coordination within teams
                    to ensure successful project execution.
                  </p>
                </section>
              </section>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}

function RecentWork() {
  const techStacks = [
    { src: "py.png", alt: "pylogo" },
    { src: "figma.png", alt: "logofigma" },
    { src: "react.png", alt: "reactlogo" },
    { src: "mysql.png", alt: "logomysql" },
    { src: "github.png", alt: "githublogo" },
    { src: "codeigniter.png", alt: "codeigniterlogo" },
    { src: "mongodb.png", alt: "mongodblogo" },
  ];
  return (
    <div
      id="work"
      className="grid gap-6 place-items-center mt-20 scroll-mt-scroll-offset"
    >
      <Reveal>
        <div className="place-items-center grid gap-8">
          <h1 className="text-3xl text-white font-abril-fatface font-bold">
            Recent Works
          </h1>
          <h2 className="text-2xl text-white font-raleway font-bold">
            My Projects
          </h2>
          <p className="text-justify indent-8 font-lato text-gray-text w-1/3">
            Below are some of the projects I have worked on, showcasing my
            experience in applying technical skills, problem-solving, and
            practical implementation across various domains.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div id="project-cards1" className="flex gap-6 ml-20 mr-20 mt-20">
          <p className="font-ibm-plex-mono text-gray-text w-1/2  text-justify">
            Rainfall Forecasting Project — A machine learning–based project that
            forecasts rainfall patterns using historical data and achieves
            competitive performance in a national-level data science
            competition.
          </p>
          <a
            href="https://github.com/Luthfi-AS/computer-vision-based-rainfall-analysis"
            target="_blank"
            className="w-1/2"
          >
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-forecast bg-cover bg-center transition-all duration-300 group-hover:blur-md group-hover:scale-110"></div>

              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold text-xl drop-shadow-lg opacity-0 translate-y-8 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  Forecasting
                </span>
              </div>
            </div>
          </a>
        </div>
      </Reveal>
      <Reveal>
        <div id="project-cards2" className="flex gap-6 ml-20 mr-20">
          <a
            href="https://github.com/Luthfi-AS/indonesian-product-review-sentiment-topic-modeling"
            target="_blank"
            className="w-1/2"
          >
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="bg-sentiment absolute group-hover:cursor-pointer bg-cover bg-center inset-0 h-48 rounded-md group-hover:blur-md "></div>
              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold font-raleway opacity-0 translate-y-6  transition-all group-hover:opacity-100 group-hover:translate-y-0 text-2xl">
                  Sentiment & Topic Analysis
                </span>
              </div>
            </div>
          </a>

          <p className="text-gray-text font-ibm-plex-mono w-1/2">
            Sentiment Analysis Project — An NLP-based project that analyzes
            Indonesian product reviews to identify sentiment polarity and
            uncover dominant discussion topics from local and foreign brand
            spesificly Advan and Xiaomi.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div id="project-cards3" className="flex gap-6 ml-20 mr-20">
          <p className="font-ibm-plex-mono text-gray-text w-1/2  text-justify">
            Managed a large-scale executive board of 115 members at HIMATIF
            Unpad, fostering a collaborative environment that drove
            organizational excellence. This strategic coordination resulted in
            the association receiving various awards and nominations at the
            faculty level.
          </p>
          <a href="serti-kahim.png" target="_blank" className="w-1/2">
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-kahim bg-cover bg-center transition-all duration-300 group-hover:blur-md group-hover:scale-110"></div>

              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold text-xl drop-shadow-lg opacity-0 translate-y-8 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  Himatif Chairman
                </span>
              </div>
            </div>
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div id="project-cards4" className="flex gap-6 ml-20 mr-20">
          <a
            href="https://blackpink-e-commerce.wuaze.com/home"
            target="_blank"
            className="w-1/2"
          >
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="bg-web absolute group-hover:cursor-pointer bg-cover bg-center inset-0 h-48 rounded-md group-hover:blur-md "></div>
              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold font-raleway opacity-0 translate-y-6  transition-all group-hover:opacity-100 group-hover:translate-y-0 text-2xl">
                  E-Commerce Website
                </span>
              </div>
            </div>
          </a>

          <p className="text-gray-text font-ibm-plex-mono w-1/2">
            E-Commerce Website Project — A web-based e-commerce application that
            enables users to browse products, add items to the cart, and
            complete purchases. In this project, I worked as a full-stack
            developer, developing both the frontend and backend using the
            CodeIgniter framework, including database integration and core
            transaction features.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div id="project-cards5" className="flex gap-6 ml-20 mr-20">
          <p className="font-ibm-plex-mono text-gray-text w-1/2  text-justify">
            DataNiaga is an AI-powered retail intelligence project that uses
            LightGBM for 10-week sales forecasting segmented by region and
            product category, along with FP-Growth for market basket analysis.
            The project provides data-driven recommendations for product
            placement, bundling, and promotional strategies to optimize retail
            performance.
          </p>
          <a
            href="https://github.com/hdans/DataNiaga"
            target="_blank"
            className="w-1/2"
          >
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-dataniaga bg-cover bg-center transition-all duration-300 group-hover:blur-md group-hover:scale-110"></div>

              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold text-xl drop-shadow-lg opacity-0 translate-y-8 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  Retail Decision Support System
                </span>
              </div>
            </div>
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div id="project-cards5" className="flex gap-6 ml-20 mr-20">
          <a
            href="https://deqrypt.vercel.app/"
            target="_blank"
            className="w-1/2"
          >
            <div className="group relative w-full h-48 overflow-hidden rounded-xl">
              <div className="bg-deqrypt absolute group-hover:cursor-pointer bg-cover bg-center inset-0 h-48 rounded-md group-hover:blur-md "></div>
              <div className="relative flex items-center justify-center h-full">
                <span className="text-black font-bold font-raleway opacity-0 translate-y-6  transition-all group-hover:opacity-100 group-hover:translate-y-0 text-2xl">
                  DeQRypt - AI-Driven DeFi Payment Ecosystem
                </span>
              </div>
            </div>
          </a>

          <p className="text-gray-text font-ibm-plex-mono w-1/2">
            DeQRypt is an AI-driven DeFi payment ecosystem on the Base network
            that simplifies crypto transactions through a Scan-to-Pay system
            and natural language portfolio management powered by Google Gemini.
            By integrating smart contract architecture with Account Abstraction
            and AI reasoning, the platform enables users to automate yield
            optimization and execute atomic payments without the usual
            complexity of Web3. Developed by a team, the project aims to bridge
            the gap between DeFi and daily life by offering a seamless,
            mobile-friendly experience for both individual users and B2B
            integrations.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="text-2xl text-white font-raleway font-bold mt-20">
          Tech Stacks
        </h2>
      </Reveal>
      <Reveal>
        <p className=" font-raleway place-self-center-safe text-gray-text w-1/3 indent-6 text-justify">
          The following technologies and tools represent the tech stack I have
          used and mastered in developing, analyzing, and delivering various IT
          solutions.
        </p>
      </Reveal>

      <Reveal>
        <div id="tech-stack-icons" className="flex gap-20 mb-20">
          {techStacks.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="hover:cursor-pointer scale-100 border-gray-stroke  hover:scale-110 transition-transform border rounded-16 bg-blue-icon rounded-xl shadow-box "
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function AwardsAndAchievements() {
  return (
    <div id="awards" className="flex flex-col items-center mt-20 px-4 mb-20">
      <Reveal>
        <h1 className="text-3xl text-white font-abril-fatface font-bold mb-12 text-center">
          Awards and Achievements
        </h1>
      </Reveal>

      <Reveal>
        {/* Menggunakan grid agar rapi di desktop (2 kolom) dan mobile (1 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 max-w-6xl w-full">
          {/* Item 1: ANAVA */}
          <div className="flex flex-col items-center md:items-start  bg-gray-box shadow-box rounded-md  p-6">
            <p className="font-ibm-plex-mono text-white text-3xl text-center font-bold">
              Datavers ANAVA #20 Universitas Gadjah Mada
            </p>
            <img
              src="sertidatavers.jpg"
              alt="Datavers Logo"
              className="w-full h-auto mt-4 object-contain "
            />
            <p className="font-ibm-plex-mono text-gray-text mt-4 text-justify leading-relaxed">
              This accomplishment involved competing against teams from diverse
              universities nationwide, demonstrating strong analytical skills
              and the ability to create classification models.
            </p>
          </div>

          {/* Item 2: GEMASTIK */}
          <div className="flex flex-col items-center md:items-start  bg-gray-box shadow-box rounded-md  p-6">
            <p className="font-ibm-plex-mono text-white font-bold text-center text-3xl">
              Padjadjaran University Delegate - GEMASTIK 2025
            </p>
            {/* Ganti src dengan logo gemastik jika ada */}
            <img
              src="sertigemastik.png"
              alt="Gemastik Logo"
              className="w-full h-auto mt-4 object-contain"
            />
            <p className="font-ibm-plex-mono text-gray-text mt-4 text-justify leading-relaxed">
              Spearheaded the technical analysis and development of a sentiment
              classification pipeline, including data scraping, modeling, and
              visualization to derive data-driven conclusions for the GEMASTIK
              2025 national competition.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function GetInTouch() {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(handleContactForm, {
    success: false,
    error: null,
  });
  return (
    <div id="contact">
      <div
        id="text-box"
        className="grid gap-6 place-items-center scroll-mt-scroll-offset"
      >
        <Reveal>
          <h1 className="font-abril-fatface text-3xl text-white font-extrabold">
            GET IN TOUCH
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl text-gray-text font-lato font-bold">
            Cultivating Connections: Reach Out and Connect with Me
          </h2>
        </Reveal>
      </div>
      <Reveal>
        <div id="form-area" className="grid mt-20 place-items-center w-full">
          <form action={formAction} className="flex gap-6">
            <div className="grid gap-6 ">
              <input
                name="senderName"
                type="text"
                placeholder="Name"
                className="font-ibm-plex-mono text-white bg-gray-form rounded-md w-xl h-10 indent-6"
              />
              <input
                type="email"
                name="senderEmail"
                placeholder="Email"
                className="font-ibm-plex-mono text-white bg-gray-form rounded-md w-xl h-10 indent-6"
              />
              <input
                type="number"
                name="senderPhone"
                placeholder="Phone Number"
                className="font-ibm-plex-mono text-white  bg-gray-form rounded-md w-xl h-10 indent-6 no-spinner"
              />
            </div>
            <div className="grid">
              <textarea
                placeholder="Message"
                name="message"
                className="font-ibm-plex-mono text-white bg-gray-form rounded-md w-xl h-26 indent-6 pt-2"
              />
              <button
                type="submit"
                disabled={pending}
                className={` border-2 border-gray-box shadow-box rounded-md font-bold ml-auto w-1/3 h-8 mt-5
                  ${
                    pending
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105 cursor-pointer"
                  }`}
              >
                {pending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
