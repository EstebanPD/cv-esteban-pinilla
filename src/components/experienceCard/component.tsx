import { ExperienceCardType } from "../../types/schema-app.type";
import "./experienceCard.scss";

type ExperienceCardProps = {
  data: ExperienceCardType;
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <>
      <div className="experience-card">
        <div className="card-header">
          <h4>{data.jobTitle}</h4>
          <div>
            <p>{`${data.company} | ${data.dates}`}</p>
          </div>
        </div>
        <ul>
          {data.experience.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceCard;
