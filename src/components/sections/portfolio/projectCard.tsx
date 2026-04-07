import { ArrowBigLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import DescriptionText from "./descriptionText";

type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    modules: string;
    moduleTitle: string;
    growthTitle: string;
    growth: string;
    author: string;
    authorImage: string;
    role: string;
    bgColor: string;
    image: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            className={`rounded-md p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 ${project.bgColor}`}
        >
            {/* LEFT CONTENT */}
            <div className="flex-1 text-white flex flex-col justify-between order-2 md:order-1">
                <p className=" font-inter font-semibold text-[8px] lm:text-[10px] lp:text-sm lg:text-base mb-2">
                    {project.category}
                </p>

                <p className="text-[14px] lm:text-xl font-body md:text-[22px] lg:text-3xl xl:text-4xl font-bold mb-3">
                    {project.title}
                </p>

                <DescriptionText desc={project.description} />

                {/* STATS */}
                <div className="flex items-center justify-between md:items-start md:justify-start lm:gap-14 lp:gap-20 lg:gap-28 text-sm mb-3 font-body mt-2">
                    <div>
                        <p className="sm:text-nowrap text-xs sm:text-sm md:text-base lm:text-base">{project.moduleTitle}</p>
                        <p className="font-bold text-md lm:text-2xl sm:text-lg md:text-xl lp:text-2xl">{project.modules}</p>
                    </div>
                    <div>
                        <p className="sm:text-nowrap text-xs sm:text-sm md:text-base lm:text-base">{project.growthTitle}</p>
                        <p className="font-bold text-md lm:text-2xl sm:text-lg md:text-xl lp:text-2xl">{project.growth}</p>
                    </div>
                </div>

                {/* AUTHOR */}
                <div className=" bg-white rounded-md px-4 py-1 lg:py-2 mt-3 lg:mt-5 flex items-center justify-between w-full">
                   <div className="flex items-center gap-2">
                     <div>
                        <Image
                            src={project.authorImage}
                            alt={project.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                        <div>
                            <p className="text-sm font-semibold font-body text-[#0A0A0A]">{project.author}</p>
                            <p className="text-xs text-gray">{project.role}</p>
                        </div>
                   </div>
                    <span className="ml-4 text-lg text-gray">
                        <ArrowRight />
                    </span>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-end order-1 md:order-2">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={700}
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default ProjectCard;