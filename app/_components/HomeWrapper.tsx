'use client'
import Button from "@/components/Button";
import { educationList } from "@/utils/education";
import Education from "./Education";
import { experienceList } from "@/utils/experience";
import Experience from "./Experience";

const HomeWrapper = () => {
  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
  }
  const handleDownloadResume = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    window.open("https://drive.google.com/file/d/1Fgos-Y5n7lkARJSQuOL4Wqc7ARWgKwZW/view", "_blank")
  }
  return (<>
    <section className="container-wrapper scroll-smooth overflow-scroll">
      {/* Hero section */}
      <section className="h-max min-h-[calc(100vh-5rem)] sm:h-full flex-grow flex flex-col-reverse gap-y-4 snap-start sm:gap-y-0 justify-start lg:flex-row gap-x-10 py-10">
        <section className="w-full lg:w-1/2 flex flex-col gap-y-4 flex-grow justify-center">
          <h1 className="text-[2rem] text-center lg:text-left sm:text-[4rem] font-bold">Sanskar Agrawal</h1>
          <h2 className="text-sm sm:text-xl font-light text-center lg:text-left sm:leading-8">Got an exciting project to kickstart your business idea & need a <span className="text-greenPrimary "> Software Developer (Freelancer or Employee)</span>!?</h2>
          <h2 className="text-sm sm:text-xl font-light text-center lg:text-left sm:leading-8"> Make sure to fill the form below to come closer to your dream business.</h2>
          <section className="flex gap-x-4 mt-4 sm:flex-row flex-col justify-center lg:justify-start items-center gap-y-2 lg:items-start">
            <Button handleClick={handleContactClick} label={"Contact Me"} extraClass={"green-shadow"} styleType="primary" />
            <Button handleClick={handleDownloadResume} label={"View Experiences"} extraClass={""} styleType="secondary" />
          </section>
        </section>
        <section className="flex-col lg:flex-row lg:w-1/2 flex items-center justify-end flex-grow">
          <div className="profile-mask green-shadow">
            <img src="profile.jpeg" alt="Couldn't load properly" className="w-[15rem] sm:w-[20rem] aspect-square lg:w-[30rem]" />
          </div>
        </section>
      </section>

      {/* Education */}
      <section className="h-max min-h-[calc(100vh-5rem)] justify-center lg:justify-start sm:h-full snap-start flex flex-col py-20 gap-y-8 lg:gap-y-0" id="education">
        <h1 className="text-[2rem] lg:text-left sm:text-[4rem] font-bold"><span className="text-greenPrimary">Edu</span>cation</h1>
        <section className="max-w-7xl mx-auto w-full flex flex-col gap-y-14">
          <section className="flex flex-col gap-y-14 sm:border-l-2 sm:p-8">
            {educationList?.map((education, index) =>
              <Education key={index}
                institute={education?.institute}
                gpa={education?.gpa}
                percentage={education?.percentage}
                startDate={education?.startDate}
                endDate={education?.endDate}
                majors={education?.majors}
                qualification={education?.qualification} />)}
          </section>
        </section>
      </section>

      {/* Experiences */}
      <section className="h-max min-h-[calc(100vh-5rem)] justify-center lg:justify-start sm:h-full snap-start flex flex-col gap-y-8 lg:gap-y-0" id="experience">
        <h1 className="text-[2rem] lg:text-left sm:text-[4rem] font-bold"><span className="text-greenPrimary">Work </span>History</h1>
        <section className="max-w-7xl mx-auto w-full flex flex-col gap-y-14">
          <section className="flex flex-col gap-y-14 sm:border-l-2 sm:p-8">
            {experienceList?.map((experience, index) =>
              <Experience key={index}
                organization={experience?.organization}
                profile={experience?.profile}
                location={experience?.location}
                description={experience?.description}
                startDate={experience?.startDate}
                endDate={experience?.endDate} />)}
            <Button handleClick={handleContactClick} label={"Contact Me"} extraClass={"green-shadow"} styleType="secondary" />
          </section>
        </section>
      </section>

    </section>
  </>);
}

export default HomeWrapper;

