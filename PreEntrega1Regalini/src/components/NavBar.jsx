import CartWidget from "./CartWidget"

const NavBar=()=> {
  
    return (
      <>
      <nav className="navbar ">
        <div className="container-fluid">
          <a className="navbar-brand title" href="#">
            GROSO
          </a>
          <a className="navbar-brand link" href="#">
            INICIO
          </a>
          <a className="navbar-brand link"  href="#">
            PRODUCTOS
          </a>
          <a className="navbar-brand link"  href="#">
            MI CUENTA
          </a>
          <CartWidget/>
        </div>
      </nav>
      </>
    )
  }
  
  export default NavBar