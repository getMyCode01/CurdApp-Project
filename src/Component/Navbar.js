import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            {/* <Link to='/Home'> Home </Link><br />
            <Link to='/User/anil'> Anil </Link><br />
            <Link to='/User/peter'>peter </Link><br />
            <Link to='/Login' >Login</Link><br/> */}
            <Link to='/Api' >Api</Link><br/>
            <Link to='/Post' >Post Api</Link><br/> 
            
            
            <Link to='/About'> About </Link>
        </div>
    )
}

export default Navbar;