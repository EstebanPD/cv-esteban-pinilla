import { useState } from "react";
import { CV_INFO_EN, CV_INFO_ES } from "../../schemas/index";
import Actions from "../actions/actions";
import ContactInformation from "../contactInformation/component";
import ExperienceCard from "../experienceCard/component";
import ContainerGap from "../informationColumn/containerGap";
import Information from "../informationColumn/information";
import "./app.scss";
import ColumnLarge from "./columnLarge";
import ColumnsGrid from "./columnsGrid";
import ColumnSmall from "./columnSmall";

const App = () => {
  const [language, setLanguage] = useState(true);
  const info = !language ? CV_INFO_ES : CV_INFO_EN;

  const onChangeLanguage = () => {
    setLanguage(!language);
  };

  const download = () => {
    window.print();
  };

  return (
    <>
      <Actions
        data={info.actions}
        changeLanguage={onChangeLanguage}
        download={download}
        language={language}
      />
      <div className="app">
        <ContainerGap>
          <ColumnsGrid>
            <ColumnLarge>
              <h1>{info.basicInformation.fullName}</h1>
              <p className="job-title">{info.basicInformation.jobTitle}</p>
            </ColumnLarge>
            <ColumnSmall>
              <ContactInformation data={info.basicInformation} />
            </ColumnSmall>
          </ColumnsGrid>

          <ColumnsGrid right>
            <ColumnSmall>
              <img
                src="profile-picture.jpg"
                alt={info.basicInformation.fullName}
                width="150"
                height="150"
                className="profile-picture"
              />
            </ColumnSmall>
            <ColumnLarge>
              <p className="profile-description">
                {info.professionalSummary.description}
              </p>
            </ColumnLarge>
          </ColumnsGrid>

          <ColumnsGrid alignStar>
            <ColumnLarge>
              {info.workExperience.experience.map((experience, index) => (
                <ExperienceCard data={experience} key={index} />
              ))}
            </ColumnLarge>
            <ColumnSmall>
              <Information
                dataSkills={info.skills}
                dataEducation={info.education}
              />
            </ColumnSmall>
          </ColumnsGrid>
        </ContainerGap>
      </div>
    </>
  );
};

export default App;
