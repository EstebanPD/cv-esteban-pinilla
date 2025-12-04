import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactInformationType } from "../../types/schema-app.type";
import "./contactInformation.scss";

type ContactInformationProps = {
  data: ContactInformationType;
};

const ContactInformation = ({ data }: ContactInformationProps) => {
  return (
    <div className="contactInformation">
      <p>
        <FontAwesomeIcon icon={faMobileScreen} />
        {data.phone}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        {data.email}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        {data.email2}
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} />
        <a href={data.linkedin.url} target="_blank">
          {data.linkedin.text}
        </a>
      </p>
    </div>
  );
};

export default ContactInformation;
