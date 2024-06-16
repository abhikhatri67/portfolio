"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Ruby on Rails</li>
        <li>Angular 2+</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors in Technology (Computer Science) - 7.5/10</li>
        <li>DIT University (Dehradun, India) 2013-2017</li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Principal Software Engineer, Senior Software Engineer (Jul 2021 – Present) GoGroup | ReactJS, Ruby on Rails, AWS</li>
        <li>Front-End Team Lead, Software Development Engineer (Mar 2017 – Jul 2021) Smart Joules Private Limited | Angular, NodeJS, Redis, GraphQL, Serverless, AWS, Highcharts</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [selectedTab, setSelectedTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setSelectedTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/workspace.webp" alt="image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a Principal Software Engineer with over 7+ years of experience, currently leading innovative projects at GoGroup in Noida, India. My expertise spans frontend (JavaScript, ReactJS) and backend (Ruby on Rails, AWS) development. I've
            spearheaded the development of a green energy provider portal and the "heyport" port call coordination tool, showcasing strong project management and mentorship skills. Previously at Smart Joules, I led the creation of JouleTrack and
            expanded the front-end team significantly. I hold a Bachelor's degree in Technology from DIT University.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            {TAB_DATA.map(tab => (
              <TabButton key={tab.id} selectTab={() => handleTabChange(tab.id)} active={selectedTab === tab.id}>
                {tab.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8"> {TAB_DATA.find(tab => tab.id == selectedTab).content} </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
