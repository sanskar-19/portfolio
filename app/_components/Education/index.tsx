import { educationList } from "@/utils/education";
import EducationItem from "./EducationItem";
import { RefObject } from "react";

const Education = ({ educationRef }: { educationRef: RefObject<HTMLDivElement> }) => {
    return (<section className="container-wrapper h-max min-h-[calc(100vh-5rem)] justify-center lg:justify-start sm:h-full snap-start flex flex-col py-20 gap-y-8 lg:gap-y-0" id="education" ref={educationRef}>
        <h1 className="text-[2rem] lg:text-left sm:text-[4rem] font-bold"><span className="text-greenPrimary">Edu</span>cation</h1>
        <section className="max-w-7xl mx-auto w-full flex flex-col gap-y-14">
            <section className="flex flex-col gap-y-14 sm:border-l-2 sm:p-8">
                {educationList?.map((education, index) =>
                    <EducationItem key={index}
                        institute={education?.institute}
                        gpa={education?.gpa}
                        percentage={education?.percentage}
                        startDate={education?.startDate}
                        endDate={education?.endDate}
                        majors={education?.majors}
                        qualification={education?.qualification} />)}
            </section>
        </section>
    </section >)
}

export default Education;