import NavbarAcc from '../components/Navbar-Account/NavbarAcc'
import AccountInfo from '../components/AccountInfo/AccountInfo'

const Account = () => {
  return (
     <>
      <header>
        <h1>Hi Arthur, welcome! You have 12 tasks. </h1>
        <input className='search' type="search" placeholder='Search' />
        <button className='user-logo'>AR</button>
      </header>
      <hr />
      <NavbarAcc/>
      <section>
      <div className='quick-actions-market'>
        <AccountInfo/>
      </div>
      </section>

    </>
  )
}
export default Account
