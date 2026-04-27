import { useState } from "react";

type DescriptionTextProps = {
    desc: string;
};

const DescriptionText = ({ desc }: DescriptionTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <p
                className={`text-[12px] lm:text-sm lp:text-sm font-body  ${
                    isExpanded ? "" : "line-clamp-2"
                } lm:line-clamp-none`}
            >
                {desc}
            </p>
            <button
                aria-label={isExpanded ? "Show Less" : "Read More"}
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-white underline cursor-pointer lm:hidden"
            >
                {isExpanded ? "Show Less" : "Read More"}
            </button>
        </div>
    );
};

export default DescriptionText;