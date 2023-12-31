import { TeamInput } from "..";
import { getRandomNumber } from "@/utilities/random.number.utility";

export const getInitialObject = (input: TeamInput): TeamInput => {
    console.log("input inicial", input);

    return {
        ...input,
        slug: input.slug || input.name?.toLowerCase(),
        average: input.average || getRandomNumber(65, 99),
    };
};

export const transformSlugData = (inputValue: string): string => {
    const startsWithThe = inputValue?.startsWith("the");
    const transformedSlug = startsWithThe
        ? inputValue?.replace("the", "").trim()
        : inputValue;

    console.log("transformedSlug", transformedSlug);

    return transformedSlug.toLowerCase();
};
