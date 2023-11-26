import { Link } from "react-router-dom"

const AdminProducts = () => {
  return (
    <div>
        <p>AdminProducts</p>
        <Link to="/admin" className="underline">Go to DashBoard</Link>
    </div>
  )
}

export default AdminProducts