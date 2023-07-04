'use client'
import { useRef } from "react";
import { Button } from "@/components";
import Education from "./Education";
import Experience from "./Experience";

const HomeWrapper = () => {
  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  }
  const handleViewExperience = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (experienceRef?.current)
      experienceRef.current.scrollIntoView();
  }
  const experienceRef = useRef<HTMLDivElement>(null);
  return (<>
    {/* <section className="container-wrapper scroll-smooth overflow-scroll"> */}
    {/* Hero section */}
    <section className="container-wrapper h-max min-h-[calc(100vh-5rem)] sm:h-full flex-grow flex flex-col-reverse gap-y-4 snap-start sm:gap-y-0 justify-start lg:flex-row gap-x-10 py-10">
      <section className="w-full lg:w-1/2 flex flex-col gap-y-4 flex-grow justify-center">
        <h1 className="text-[2rem] text-center lg:text-left sm:text-[4rem] font-bold">Sanskar Agrawal</h1>
        <h2 className="text-sm sm:text-xl font-light text-center lg:text-left sm:leading-8">Got an exciting project to kickstart your business idea & need a <span className="text-greenPrimary "> Software Developer (Freelancer or Employee)</span>!?</h2>
        <h2 className="text-sm sm:text-xl font-light text-center lg:text-left sm:leading-8"> Make sure to fill the form below to come closer to your dream business.</h2>
        <section className="flex gap-x-4 mt-4 sm:flex-row flex-col justify-center lg:justify-start items-center gap-y-2 lg:items-start">
          <Button handleClick={handleContactClick} label={"Get started"} extraClass={"green-shadow"} styleType="primary" />
          <Button handleClick={handleViewExperience} label={"View Experience"} extraClass={""} styleType="secondary" />
        </section>
      </section>
      <section className="flex-col lg:flex-row lg:w-1/2 flex items-center justify-end flex-grow">
        <div className="profile-mask green-shadow">
          <img src="profile.jpeg" alt="Couldn't load properly" className="w-[15rem] sm:w-[20rem] aspect-square lg:w-[30rem]" />
        </div>
      </section>
    </section>


    {/* Education Section */}
    <Education />

    {/* Experience */}
    <Experience experienceRef={experienceRef} />

    {/* </section> */}
  </>);
}

export default HomeWrapper;

