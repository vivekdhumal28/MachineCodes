import React, { useState } from "react";

const Accordian = () => {
  const items = [
    {
      title: "Item 1",
      content: "This is content of Item 1",
    },
    {
      title: "Item 2",
      content: "This is content of Item 2",
    },
    {
      title: "Item 3",
      content: "This is content of Item 3",
    },
  ];

  const [activeState, setActiveState] = useState(null);

  const onItemClick = (index) => {
    setActiveState(index === activeState ? null : index);
  };

  return (
    <div className="accordian">
      {items.map((item, index) => (
        <div key={item.title} className="accordian-item">
          <section onClick={() => onItemClick(index)} className="acc-text">
            <h3>{item.title}</h3>
            {index === activeState && <p>{item.content}</p>}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
