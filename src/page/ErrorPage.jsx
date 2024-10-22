import { Link } from "react-router-dom"


function ErrorPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold font-cinzel text-red-500">This page is not Found.</h1>
      <div className=" pt-20">
        <Link className="btn btn-success" to={'/'}>Back to Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage
