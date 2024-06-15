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
        <li>Angular 2+</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>DIT University</li>
      </ul>
    ),
  },
  {
    id: "experince",
    title: "Experince",
    content: (
      <ul className="list-disc pl-2">
        <li>GoGroup</li>
        <li>Smart Joules</li>
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
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS, and Git. I am a quick learner and I
            am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
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
