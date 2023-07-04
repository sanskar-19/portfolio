type EducationProps = {
    institute: string;
    gpa?: string;
    percentage?: string;
    startDate: string;
    endDate: string;
    majors: string;
    qualification: string;
}

const Education = ({ institute, gpa, percentage, startDate, endDate, majors, qualification }: EducationProps) => {
    return (<article>
        <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8  text-greenPrimary">{qualification}</h2>
        <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8">{majors}</h2>
        <h2 className="text-sm sm:text-xl font-light  lg:text-left sm:leading-8">{institute}</h2>
        <h2 className="mt-4 text-xs sm:text-base font-light  lg:text-left sm:leading-8">Score : <span className="text-greenPrimary font-medium text-sm sm:text-xl">{gpa ?? percentage}</span></h2>
        <h2 className="text-xs sm:text-base font-light  lg:text-left sm:leading-8">{startDate} - {endDate}</h2>
    </article>);
}

export default Education;