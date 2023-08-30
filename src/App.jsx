import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState(null);

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <section className="jobs-center">
        <article className="btn-container">
          <div className="job-btn">First job</div>
        </article>
        <JobInfo {...tabs[0]} />
      </section>
    </main>
  );
};
export default App;
