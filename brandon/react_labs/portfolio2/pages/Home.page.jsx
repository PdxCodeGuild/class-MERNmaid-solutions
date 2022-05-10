import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Hello from "../components/Hello";
import Education from "../components/Education";
import Work from "../components/Work";

const Home = () => {
  return (
    <div id="homePage" className="pages">
      <Tabs defaultActiveKey="hello">
        <Tab className="helloTab" eventKey="hello" title="Hello!">
          <Hello />
        </Tab>
        <Tab className="outerTab" eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab className="outerTab" eventKey="employment" title="Employment History">
          <Work />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Home;
