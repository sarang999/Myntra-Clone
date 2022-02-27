import React, { useState } from "react";
import Section from "./Section";
import "./menswomen.css";
import data from "../../assets/data";
import Heading from "./Heading";

export const Men = () => {
  const [currentTab, setCurrentTab] = useState("men");

  const { men, women } = data;

  let dataToRender = men;

  return (
    <div className="menspage-size-zero">
      {dataToRender.banner.map((row, index) => {
        return <Section imageList={row} key={index} />;
      })}
      {dataToRender.categories.map((row, index) => {
        return (
          <div key={index}>
            <Heading title={row.title} />
            <Section imageList={row.imageList} />
          </div>
        );
      })}
      {<Heading title={dataToRender.brandOffers.title} />}
      {dataToRender.brandOffers.mat.map((row, index) => {
        return <Section imageList={row} key={index} />;
      })}
    </div>
  );
};
