import { EducationCardType, EducationType } from "../../types/schema-app.type";
import ContainerGap from "./containerGap";

const Card = ({ title, institutions, otherKnowledge }: EducationType) => {
  return (
    <>
      <h2>{title}</h2>
      <ContainerGap>
        {institutions.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
        <div>
          <h4>{otherKnowledge.title}</h4>
          <ul>
            {otherKnowledge.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </ContainerGap>
    </>
  );
};

const EducationCard = ({ data }: EducationCardType) => {
  return (
    <Card
      title={data.title}
      institutions={data.institutions}
      otherKnowledge={data.otherKnowledge}
    />
  );
};

export default EducationCard;
