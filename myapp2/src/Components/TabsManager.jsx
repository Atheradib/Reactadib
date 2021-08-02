import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabsManager.css";

export const TabsManager = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="SectionI" title="Section I">
        Tab1
      </Tab>
      <Tab eventKey="SectionII" title="Section II">
        Tab2
      </Tab>
      <Tab eventKey="SectionIII" title="Section III" disabled>
        Tab3
      </Tab>
    </Tabs>
  );
};
