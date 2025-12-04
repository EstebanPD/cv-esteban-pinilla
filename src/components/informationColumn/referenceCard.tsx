import { ReferencesCardType, ReferenceType } from "../../types/schema-app.type";
import ContainerGap from "./containerGap";

const Card = ({ title, reference }: ReferenceType) => {
  return (
    <div>
      <ContainerGap>
        <h2>{title}</h2>
        {reference.map((item, index) => (
          <div key={index}>
            <h4>{item.jobTitle}</h4>
            <p>{item.name}</p>
            <p>{item.phone}</p>
          </div>
        ))}
      </ContainerGap>
    </div>
  );
};

const ReferenceCard = ({ data }: ReferencesCardType) => {
  return <Card title={data.title} reference={data.reference} />;
};

export default ReferenceCard;
