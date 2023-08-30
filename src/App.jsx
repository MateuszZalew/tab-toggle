import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      setTabs(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeTab = (id) => {
    setCurrentTab(id);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <section className="jobs-center">
        <BtnContainer
          tabs={tabs}
          currentTab={currentTab}
          changeTab={changeTab}
        />
        <JobInfo {...tabs[currentTab]} />
      </section>
    </main>
  );
};
export default App;
