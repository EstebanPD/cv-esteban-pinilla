import { SkillsCardType } from "../../types/schema-app";

type CardProps = {
  title?: string;
  subTitle: string;
  arrayString: string[];
};

const Card = ({ title, subTitle, arrayString }: CardProps) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <h4>{subTitle}</h4>
      <ul>
        {arrayString.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const SkillsCard = ({ data }: SkillsCardType) => {
  return (
    <>
      <Card
        title={data.title}
        subTitle={data.technical.title}
        arrayString={data.technical.items}
      />
      <Card
        subTitle={data.softSkills.title}
        arrayString={data.softSkills.items}
      />
    </>
  );
};

export default SkillsCard;
