"use client";
import Link from "next/link";
import Image from "next/image";
import gitIcon from '../public/assets/images/git.png';
import awsIcon from '../public/assets/images/aws.png';
import mailIcon from '../public/assets/icons/mail.svg';
import reactIcon from '../public/assets/images/react.png';
import reduxIcon from '../public/assets/images/redux.png';
import nodejsIcon from '../public/assets/images/node-js.png';
import profilephotoIcon from '../public/assets/images/pp.jpg';
import githubIcon from '../public/assets/icons/github-icon.svg';
import typescriptIcon from '../public/assets/images/typescipt.png';
import javasciptIcon from '../public/assets/images/javascript.png';
import linkedinIcon from '../public/assets/icons/linkedin-icon.svg';
import tailwindcssIcon from '../public/assets/images/tailwind-css.png';
import hamburgerMenuIcon from '../public/assets/icons/hamburger-menu.svg';

export default function Home() {

  const githubUrl = "https://github.com/Adigun-Mubaraq";
  const linkedinUrl = "https://www.linkedin.com/in/mubaraq-adigun06";

  const skillsIcon = [
    {
      url: reactIcon,
      label: "React"
    },
    {
      url: reduxIcon,
      label: "Redux"
    },
    {
      url: typescriptIcon,
      label: "Typescript"
    },
    {
      url: tailwindcssIcon,
      label: "Tailwind CSS"
    },
    {
      url: javasciptIcon,
      label: "Javascript"
    },
    {
      url: gitIcon,
      label: "Git"
    },
    {
      url: nodejsIcon,
      label: "Node JS"
    },
    {
      url: awsIcon,
      label: "AWS"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };


  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between w-full h-[88px] bg-[#1A1B1C] px-12 md:px-20 py-8">
        <div className="flex items-center gap-x-24 hidden md:flex">
          <button
            onClick={() => scrollToSection('projects')}
            className="font-bold cursor-pointer text-2xl"
          >Projects</button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-bold cursor-pointer text-2xl"
          >Contact</button>
        </div>
        <div className="flex cursor-pointer items-center gap-x-4">
          <p className="font-medium text-xl">Mubaraq</p>
          <Image
            alt="pp"
            src={profilephotoIcon}
            width={40} height={40}
            className="rounded-full"
          />
        </div>
        <div className="md:hidden">
          <Image
            alt="menu"
            src={hamburgerMenuIcon}
            className="w-10 h-7 cursor-pointer"
          />
        </div>
      </header>
      <main className='bg-cover bg-center h-screen bg-[url("/assets/images/bg-img.png")]'>
        <div className="flex items-center justify-between h-full px-8 lg:px-24 md:px-16 sm:px-8">
          <div className="hidden md:flex flex-col border-l-[6px] gap-y-[14px] border-gold pl-6">
            <Link href={linkedinUrl} target="_blank">
              <button className="w-10 h-10 cursor-pointer">
                <Image
                  src={linkedinIcon}
                  alt="Visit my linkedin page"
                />
              </button>
            </Link>
            <Link href={githubUrl} target="_blank">
              <button className="w-10 h-10 cursor-pointer">
                <Image
                  src={githubIcon}
                  alt="Visit my github page"
                  className="w-10 h-10 cursor-pointer"
                />
              </button>
            </Link>
          </div>

          <div className="grid gap-5 max-w-[544px] text-center md:text-left mx-auto md:mx-0">
            <p className="font-bold text-3xl leading-10 text-gold md:hidden">MUBARAQ ADIGUN</p>
            <p className="hidden font-bold text-3xl leading-10 md:block">
              MUBARAQ <span className="text-gold">AKOLADE ADIGUN</span>
            </p>

            <p className="font-bold text-xl">
              <span>Frontend Developer delivering scalable, high-performance web and mobile applications with a focus on enhancing user experiences and optimizing efficiency.</span>
            </p>
            <Link href="mailto:mubaraqadigun.a@gmail.com">
              <button className="w-[180px] mx-auto md:mx-0 border-gold border-[5px] mt-4 rounded-xl">
                <p className="text-gold text-lg font-bold py-[18px] px-7">Contact me</p>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <section className="py-14 px-12 lg:px-24 md:px-16 sm:px-8 mb-12">
        <div className="md:flex gap-x-5">
          <div className="mb-5 md:mb-0">
            <span className="font-bold text-gold text-3xl leading-10">About</span>
            <hr className="border-b-[5px] border-gold mt-2 w-16" />
          </div>
          <div className="font-semibold text-xl mt-0 md:mt-10">
            <p>
              With over 4 years of experience in front-end development,
              I specialize in building high-performance, user-friendly applications using React and React Native.
              I've successfully delivered projects across various industries, from EdTech to logistics, leveraging technologies like TypeScript, Redux, and Next.js to create scalable, maintainable solutions.
              My expertise extends to deploying apps across web and mobile platforms, driving efficiencies, and improving user experience.
            </p>
          </div>
        </div>
      </section>
      <section className="py-14 px-12 lg:px-24 md:px-16 sm:px-8 mb-12">
        <p className="text-center font-bold text-3xl mb-8">Skills</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsIcon.map((icon, idx) => {
            const isTopRow = idx < 4;
            const isLeft = idx % 4 === 0;
            const isRight = (idx + 1) % 4 === 0;
            return (
              <div
                key={idx}
                className={`
                  flex flex-col justify-center items-center w-full h-[200px] custom-gradient rounded-xl relative
                  ${isTopRow ? 'gradient-top' : ''}
                  ${isLeft ? 'gradient-left' : ''}
                  ${isRight ? 'gradient-right' : ''}
                `}
              >
                <Image src={icon.url} alt={icon.label} className="w-32 h-32" />
                <p className="font-bold mt-1">{icon.label}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-14 px-12 lg:px-24 md:px-16 sm:px-8 mb-12">
        <p className="text-center font-bold text-3xl mb-8">Certificates</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center cursor-pointer rounded-3xl bg-[#3D3E42] gap-x-4 px-10 py-7 w-full h-[80px]">
            <Image src={awsIcon} alt="aws" className="h-8 w-8" />
            <p className="text-white font-semibold text-xl">Amazon Web Services Cloud Practitioner</p>
          </div>
          <div className="flex items-center cursor-pointer rounded-3xl bg-[#3D3E42] gap-x-4 px-10 py-7 w-full h-[80px]">
            <Image src={awsIcon} alt="aws" className="h-8 w-8" />
            <p className="text-white font-semibold text-xl">AWS Cloud Quest: Cloud Practitioner</p>
          </div>
        </div>
      </section>
      <section id="projects" className="py-14 px-12 lg:px-24 md:px-16 sm:px-8 mb-12">
        <p className="text-left text-gold font-bold text-3xl mb-8">Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((val) => (
            <div key={val} className="h-[280px] bg-[#3D3E42] cursor-pointer rounded-xl">
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="py-14 px-12 lg:px-24 md:px-16 sm:px-8 mb-12">
        <p className="text-left text-gold font-bold text-3xl mb-8">Contact</p>
        <div className="flex flex-col gap-y-5">
          <Link href={githubUrl}>
            <button className="flex items-center gap-x-6 cursor-pointer">
              <Image
                src={githubIcon}
                alt="Visit my github page"
                className="w-10 h-10 cursor-pointer"
              />
              <p className="text-white font-bold text-xl">Adigun-Mubaraq</p>
            </button>
          </Link>
          <Link href={linkedinUrl}>
            <button className="flex items-center gap-x-6 cursor-pointer">
              <Image
                src={linkedinIcon}
                alt="Visit my linkedIn page"
                className="w-10 h-10 cursor-pointer"
              />
              <p className="text-white font-bold text-xl">Adigun Mubaraq</p>
            </button>
          </Link>
          <Link href="mailto:mubaraqadigun.a@gmail.com">
            <div className="flex items-center gap-x-6 cursor-pointer">
              <Image
                src={mailIcon}
                alt="reach me via mail"
                className="w-10 h-10 cursor-pointer"
              />
              <p className="text-white font-bold text-xl">mubaraqadigun.a@gmail.com</p>
            </div>
          </Link>
        </div>
      </section>
      <footer className="flex justify-center mb-10">
        <p className="font-semibold text-center">Designed by Adigun Mubaraq</p>
      </footer>
    </div>
  );
}
