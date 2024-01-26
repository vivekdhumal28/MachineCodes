import React, { useState } from "react";
import Tab from "./Tab";

const TabMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="App">
        <Tab value={currentIndex} onChange={handleChange}>
          <Tab.Heads>
            <Tab.Item label="Tab1" index={0}></Tab.Item>
            <Tab.Item label="Tab2" index={1}></Tab.Item>
            <Tab.Item label="Tab3" index={2}></Tab.Item>
          </Tab.Heads>
          <Tab.ContentWrapper>
            <Tab.Content index={0}>
              <h1>I am Content 1</h1>
            </Tab.Content>
            <Tab.Content index={1}>
              <h1>I am Content 2</h1>
            </Tab.Content>
            <Tab.Content index={2}>
              <h1>I am Content 3</h1>
            </Tab.Content>
          </Tab.ContentWrapper>
        </Tab>
      </div>
    </>
  );
};

export default TabMain;
