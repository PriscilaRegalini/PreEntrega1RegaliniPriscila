import CartWidget from "./CartWidget"

const NavBar=()=> {
  
    return (
      <>  
      <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item "><a className="navbar-brand title" href="#">GROSO</a></li>
            <li className="nav-item  mt-3"><a className="navbar-brand link" href="#">INICIO</a></li>
            <li className="nav-item  mt-3"><a className="navbar-brand link"  href="#">PRODUCTOS</a></li>
            <li className="nav-item  mt-3"><a className="navbar-brand link"  href="#">MI CUENTA</a></li>
            <li className="nav-item mt-2 CartWidget"><CartWidget/></li>       
          </ul>
      </nav>
      </>
    )
  }
  
  export default NavBar