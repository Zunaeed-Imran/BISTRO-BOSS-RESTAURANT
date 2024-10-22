import { Link } from "react-router-dom"


function ErrorPage() {
  return (
    <div>
      <h1 className="text-3xl text-red-500">This page is not Found.</h1>
      <Link className="btn btn-success" to={'/'}>Back to Home</Link>
    </div>
  )
}

export default ErrorPage
