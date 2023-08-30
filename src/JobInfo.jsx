import Duties from "./Duties";

const JobInfo = ({ id, company, dates, title, duties }) => {
  return (
    <article>
      <h1>{title}</h1>
      <span className="job-company">{company}</span>
      <div className="job-date">{dates}</div>
      <Duties key={id} duties={duties} />
    </article>
  );
};

export default JobInfo;
