import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { acc } from "../utils";
import { ChangeEvent } from "react";

interface AccordianItem {
  name: string;
  key: string;
  options: string[];
}

const Accordian = () => {
  const item = acc as AccordianItem;
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="accordian-container">
      <div className="name-icon-container">
        <div className="name-container">{item.name}</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleDown} style={{ color: "#000000" }} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} style={{ color: "#000000" }} />
          )}
        </button>
      </div>
      {isOpen && (
        <div>
          <fieldset className="checkboxes-container">
            {item.options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  name={option}
                  value={option}
                  onChange={handleChange}
                />
                {option}
              </label>
            ))}
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default Accordian;
