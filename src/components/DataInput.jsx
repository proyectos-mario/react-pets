import React from "react";
import DataInputLeft from "./DataInputLeft";
import DataInputRight from "./DataInputRight";
import "../assets/styles/components/DataInput.css";

const DataInput = () => {
  return (
    <>
      <section className="dataInput">
        <div className="container">
          <DataInputLeft />
          <DataInputRight />
        </div>
      </section>
    </>
  );
};

export default DataInput;
