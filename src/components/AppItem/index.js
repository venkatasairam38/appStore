// Write your code here
import './index.css'

const AppItems = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li className="appList">
      <img src={imageUrl} alt={appName} className="appImg" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItems
