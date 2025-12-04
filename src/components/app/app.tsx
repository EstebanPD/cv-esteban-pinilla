import { Fragment, useState } from "react";
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
import RowGrid from "./rowGrid";
import { contractTypes } from "../../constants/constant";

const App = () => {
  const [language, setLanguage] = useState(true);
  const info = !language ? CV_INFO_ES : CV_INFO_EN;
  const route = new URLSearchParams(window.location.search).get(
    "contract-type"
  );

  const onChangeLanguage = () => {
    setLanguage(!language);
  };

  const download = () => {
    window.print();
  };

  const experienceFilter = info.workExperience.experience.filter(
    (exp) => exp.type !== contractTypes.freelance
  );

  const experience =
    route == contractTypes.freelance.toLowerCase()
      ? info.workExperience.experience
      : experienceFilter;

  return (
    <Fragment>
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

          <RowGrid>
            <p className="profile-description">
              {info.professionalSummary.description}
            </p>
          </RowGrid>

          <ColumnsGrid left>
            <ColumnLarge>
              {experience.map((experience, index) => (
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
    </Fragment>
  );
};

export default App;
