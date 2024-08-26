import {
  EducationType,
  ReferenceType,
  SkillsType,
} from "../../types/schema-app";
import ContainerGap from "./containerGap";
import EducationCard from "./educationCard";
import ReferenceCard from "./referenceCard";
import SkillsCard from "./skillsCard";

type InformationProps = {
  dataSkills: SkillsType;
  dataEducation: EducationType;
  dataReference: ReferenceType;
};

const Information = ({
  dataSkills,
  dataEducation,
  dataReference,
}: InformationProps) => {
  return (
    <ContainerGap>
      <SkillsCard data={dataSkills} />
      <EducationCard data={dataEducation} />
      <ReferenceCard data={dataReference} />
    </ContainerGap>
  );
};

export default Information;
