import { FC } from "react";

import ProjectItem from "./item/ProjectItem";
import * as S from "./Projects.style";

const Projects: FC = () => {
  return (
    <ul css={S.projects}>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </ul>
  );
};

export default Projects;
