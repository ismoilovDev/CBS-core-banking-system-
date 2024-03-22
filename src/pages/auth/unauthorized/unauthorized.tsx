import { Link } from "react-router-dom"

function Unauthorized() {
   return (
      <div>
         <h1>Sizga dostup yo'q</h1>
         <Link to='/'>Home</Link>
      </div>
   )
}

export default Unauthorized