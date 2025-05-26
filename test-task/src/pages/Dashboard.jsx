import Navbar from '../components/Navbar/Navbar'
import WorkQueue from '../components/WorkQueue/WorkQueue'
import PortGoals from '../components/PortGoals/PortGoals'
import Market from '../components/Market/Market'
import QuickActions from '../components/QuickActions/QuickActions'
import './/styles/Dashboard.css'
import MyAccounts from '../components/MyAccounts/MyAccounts'

const Dashboard = () => {
  return (
    <>
      <header>
        <h1>Hi Arthur, welcome! You have 12 tasks. </h1>
        <input className='search' type="search" placeholder='Search' />
        <button className='user-logo'>AR</button>
      </header>
      <hr />
      <Navbar/>
      <section>
      <WorkQueue/>
        <div className="dashboard-elements">
          <PortGoals/>
        <div className='quick-actions-market'>
          <QuickActions/>
          <Market/>
          </div>
        </div>
      </section>
      <div className='myAccounts'>
        <MyAccounts/>
      </div>
    </>
  )
}

export default Dashboard