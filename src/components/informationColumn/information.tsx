import { EducationType, SkillsType } from "../../types/schema-app";
import ContainerGap from "./containerGap";
import EducationCard from "./educationCard";
import SkillsCard from "./skillsCard";

type InformationProps = {
  dataSkills: SkillsType;
  dataEducation: EducationType;
};

const Information = ({ dataSkills, dataEducation }: InformationProps) => {
  return (
    <ContainerGap>
      <SkillsCard data={dataSkills} />
      <EducationCard data={dataEducation} />
    </ContainerGap>
  );
};

export default Information;
