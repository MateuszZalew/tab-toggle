const BtnContainer = ({ tabs, currentTab, changeTab }) => {
  const handleClick = (index) => {
    changeTab(index);
  };
  return (
    <article className="btn-container">
      {tabs.map((tab, index) => (
        <button
          className={`job-btn ${currentTab === index ? "active-btn" : ""}`}
          key={tab.id}
          onClick={() => handleClick(index)}
        >
          {tab.company}
        </button>
      ))}
    </article>
  );
};

export default BtnContainer;
