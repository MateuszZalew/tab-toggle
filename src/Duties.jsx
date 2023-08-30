import { FiChevronsRight } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty) => (
        <div key={uuidv4()} className="job-desc">
          <span className="job-icon">
            <FiChevronsRight />
          </span>
          <p>{duty}</p>
        </div>
      ))}
    </>
  );
};

export default Duties;
