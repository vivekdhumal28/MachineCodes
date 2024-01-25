import React, { useState } from "react";

const Accordian2 = (props: Props) => {
  const [select, setSelect] = useState(false);

  const Items = [
    {
      id: 1,
      title: "Title 1",
      content: "Content of first Accord",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content of second Accord",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content of third Accord",
    },
  ];

  const handleClick = (index) => {
    setSelect(index === select ? null : index);
  };
  return (
    <>
      <div>
        {Items.map((item, index) => (
          <div key={item.id}>
            <section onClick={() => handleClick(index)}>
              <h1>{item.title}</h1>
              {index === select && <p>{item.content}</p>}
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian2;
