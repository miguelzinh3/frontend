import { LIST_PROJECTS } from "@/common/graphql/queries";
import { IProject } from "@/common/types/ProjectInterfaces";
import { NextPage } from "next";
import { client } from "../../common/graphql/client";

interface Props {
    projects: IProject[]
}


const About: NextPage<Props> = (Props) => {
    return (
        <p>About Page</p>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {

    const { data } = await client.query({query: LIST_PROJECTS})
    const projects: IProject[] = data.projects.data;

    return {
        props: {
            projects
        }
    }
}

export default About;
