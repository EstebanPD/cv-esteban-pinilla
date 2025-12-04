import { SkillsCardType } from "../../types/schema-app.type";

const SkillsCard = ({ data }: SkillsCardType) => {
  const { title, items } = data;
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
