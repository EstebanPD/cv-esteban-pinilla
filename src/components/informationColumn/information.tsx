import { EducationType, TSkills } from "../../types/schema-app.type";
import ContainerGap from "./containerGap";
import SkillsCard from "./skillsCard";
import EducationCard from "./educationCard";

type InformationProps = {
  dataSkills: TSkills;
  dataEducation: EducationType;
};

const Information = ({ dataSkills, dataEducation }: InformationProps) => {
  const { title, technicalSkills } = dataSkills;

  return (
    <ContainerGap>
      <h2>{title}</h2>
      <div>
        {technicalSkills.items.map((skill, index) => (
          <SkillsCard key={index} data={skill} />
        ))}
      </div>
      {/* <SkillsCard data={softSkills} /> */}
      <EducationCard data={dataEducation} />
    </ContainerGap>
  );
};

export default Information;
