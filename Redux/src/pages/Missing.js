import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className='red'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link  to="/">Back to HomePage</Link>
    </div>
  )
}

export default Missing
