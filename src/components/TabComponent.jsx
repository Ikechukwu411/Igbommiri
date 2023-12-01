import React, { useState } from "react";
const Data = ["Overview", "Description", "Shipping", "Warranty"];
const DataDetails = [
  `UV marble sheets offer a cost-effective and durable alternative to natural marble. 
  Mimicking the luxurious appeal of genuine marble, these sheets 
  boast easy maintenance, versatility in design, and effortless installation.`,
  `UV marble sheets are innovative surfacing materials that
   replicate the exquisite appearance of natural marble using UV printing technology`,
  `The shipping process for UV marble
   sheets typically involves careful packaging and
    transport to ensure their safe delivery to the intended destination.`,
  `This warranty does not cover damage resulting from improper handling,
   installation by unauthorized personnel, or exposure to extreme 
   temperatures exceeding 140°F (60°C).`,
];

const TabComponent = () => {
  const [desc, setDesc] = useState(DataDetails);
  const [value, setValue] = useState(0);

  const item = desc[value];
  return (
    <React.Fragment>
      <section
        className="section"
        style={{ backgroundColor: "#F2F2F2", marginTop: "-3rem" }}
      >
        <div className="container box ">
          <div className="tabs">
            <ul>
              {Data.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${index === value && "is-active"}`}
                    onClick={() => {
                      setValue(index);
                    }}
                  >
                    <a>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                color: "black",
                width: "70%",
              }}
            >
              {item}
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TabComponent;
