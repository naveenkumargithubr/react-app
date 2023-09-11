import "./index.css";

const TabItem = (props) => {
  //here we access the props
  const { tabDetails, updateActiveTabId } = props;
  const { displayText, tabId } = tabDetails;

  //now call the updateActiveTabId method and pass the tabId here
  const onClickTab = () => {
    updateActiveTabId(tabId);
  };

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
