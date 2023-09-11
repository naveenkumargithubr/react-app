import "./index.css";

const TabItem = (props) => {
  //here we access the props
  const { tabDetails, updateActiveTabId, isActive } = props;
  const { displayText, tabId } = tabDetails;

  //if when select a particular tab its highlighted
  const activeTab = isActive ? "active-tab-btn" : "";

  //now call the updateActiveTabId method and pass the tabId here
  const onClickTab = () => {
    updateActiveTabId(tabId);
  };

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
