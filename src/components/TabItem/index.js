import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabChange, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabChange = () => {
    updatedTabChange(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTabChange}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
