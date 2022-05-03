import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Hello from "../components/Hello";
import Education from "../components/Education";
import Work from "../components/Work";

const Home = () => {
  return (
    <div id="homePage" className="pages">
      <Tabs id="tabs" defaultActiveKey="hello">
        <Tab className="tab" eventKey="hello" title="Hello!">
          <Hello />
        </Tab>
        <Tab className="tab" eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab className="tab" eventKey="employment" title="Employment History">
          <Work />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Home;
