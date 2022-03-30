import type { NextPage } from "next";

import Project from "@components/project/Project";
import * as S from "./projects.style";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <h2 className="a11y">projects</h2>
      <ul css={S.projects}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ul>
    </>
  );
};

export default ProjectsPage;
