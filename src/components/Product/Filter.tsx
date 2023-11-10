import React from "react";
import Accordian from "../DesignSystem/Accordian";
import { AccordianItem, acc } from "../utils";

const Filter = () => {
  const item = acc as AccordianItem[];
  return (
    <div>
      {acc.map(
        (item: {
          name: string;
          key: string;
          options: { name: string | JSX.Element[]; key: string }[];
        }) => (
          <Accordian accordianData={item} />
        )
      )}
    </div>
  );
};

export default Filter;
