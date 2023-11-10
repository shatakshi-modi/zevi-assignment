import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { AccordianItem } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actionCreator";
import { RootState } from "../../redux/reducer";

interface AccordianProps {
  accordianData: AccordianItem;
}

const Accordian: React.FC<AccordianProps> = ({ accordianData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { filter } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<string[]>(
    filter[accordianData.key] || []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const updatedValues = checked
      ? [...formValues, value]
      : formValues.filter((item: string) => item !== value);

    console.log(value, updatedValues);
    setFormValues(updatedValues);
  };
  useEffect(() => {
    dispatch(setFilter({ [accordianData.key]: formValues }));
  }, [formValues]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="accordian-container">
      <div className="name-icon-container">
        <div className="name-container">{accordianData.name}</div>
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
            {accordianData.options.map((option) => (
              <label key={option.key}>
                <input
                  type="checkbox"
                  name={accordianData.key}
                  value={option.key}
                  checked={formValues.includes(option.key)}
                  onChange={handleChange}
                />
                {option.name}
              </label>
            ))}
          </fieldset>
        </div>
      )}
    </form>
  );
};

export default Accordian;
