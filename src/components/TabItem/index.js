// Write your code here
import './index.css'

const TabItems = props => {
  const {tabsList, onClickTabId, isActiveTab} = props
  const {displayText, tabId} = tabsList

  const onClickTab = () => {
    onClickTabId(tabId)
  }
  const FilteredStyle = isActiveTab ? 'btn' : ''

  return (
    <li className="item">
      <button
        className={`button ${FilteredStyle}`}
        onClick={onClickTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
