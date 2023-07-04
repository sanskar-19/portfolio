import { experienceList } from "@/utils/experience"
import ExperienceItem from "./ExperienceItem"
import { RefObject } from "react";
import Link from "next/link";
import { Button } from "@/components";

const Experience = ({ experienceRef }: { experienceRef: RefObject<HTMLDivElement> }) => {
    return (
        <section className="container-wrapper h-max min-h-[calc(100vh-5rem)] justify-center lg:justify-start sm:h-full snap-start flex flex-col gap-y-8 lg:gap-y-0 sm:py-20" id="experience" ref={experienceRef} >
            <h1 className="text-[2rem] lg:text-left sm:text-[4rem] font-bold"><span className="text-greenPrimary">Work </span>History</h1>
            <section className="max-w-7xl mx-auto w-full flex flex-col gap-y-14">
                <section className="flex flex-col gap-y-14 sm:border-l-2 sm:p-8">
                    {experienceList?.map((experience, index) =>
                        <ExperienceItem key={index}
                            organization={experience?.organization}
                            profile={experience?.profile}
                            location={experience?.location}
                            description={experience?.description}
                            startDate={experience?.startDate}
                            endDate={experience?.endDate} />)}
                    {/* <Button handleClick={handleContactClick} label={"Contact Me"} extraClass={"green-shadow"} styleType="secondary" /> */}
                    <Link className="text-base underline-offset-2" href={"/experience-and-projects"}>
                        <Button label={"Know more"} extraClass={"green-shadow"} styleType="secondary" />
                    </Link>
                </section>
            </section>
        </section>
    );
}

export default Experience;