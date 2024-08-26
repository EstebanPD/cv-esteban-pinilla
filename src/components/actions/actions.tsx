import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./actions.scss";

type ActionsType = {
  text: string;
  es: string;
  en: string;
  download: string;
};

type ActionsProps = {
  data: ActionsType;
  changeLanguage: () => void;
  download: () => void;
  language: boolean;
};
const Actions = ({
  data,
  changeLanguage,
  download,
  language,
}: ActionsProps) => {
  const classes = classNames("switch", {
    ["switch-active"]: language,
    ["switch-deactivated"]: !language,
  });
  return (
    <div className="actions">
      <div className={classes}>
        <button onClick={changeLanguage} disabled={language == false}>
          {data.es}
        </button>
        <button onClick={changeLanguage} disabled={language == true}>
          {data.en}
        </button>
      </div>
      <button onClick={download} className="download">
        <FontAwesomeIcon icon={faDownload} />
        {data.download}
      </button>
    </div>
  );
};

export default Actions;
