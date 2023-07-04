type ExperienceProps = {
    organization: string;
    profile: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string[];
}

const Experience = ({ organization, profile, startDate, endDate, location, description }: ExperienceProps) => {
    return (<article className="flex justify-between flex-col gap-y-4 lg:flex-row">
        <div className="flex flex-col w-full lg:w-[70%] flex-grow-0">
            <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8 opacity-60">{profile}</h2>
            <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8">{organization}</h2>
            <div className="relative mt-4 px-4 sm:px-0">
                {description?.map((achievement, index) => <h2 className="list-item text-sm sm:text-base font-light  lg:text-left sm:leading-8">{achievement}</h2>)}
            </div>
        </div>
        <div className="flex flex-col w-full lg:w-[20%]">
            <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8 opacity-60">{location}</h2>
            {/* <h2 className="mt-4 text-xs sm:text-base font-light  lg:text-left sm:leading-8">Score : <span className="text-greenPrimary font-medium text-sm sm:text-xl">{gpa ?? percentage}</span></h2> */}
            <h2 className="text-xs sm:text-base font-light  lg:text-left sm:leading-8">{startDate} - {endDate}</h2>
        </div>
    </article>);
}

export default Experience;