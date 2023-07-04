import { Link } from "react-router-dom";

export default function Header({ 
  heading, 
  paragraph, 
  linkName, 
  linkUrl="#"
}) {
  return(
    <div className = "mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph} {''}
        <Link to={linkUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
          {linkName}
        </Link>
      </p>
    </div>
  )
}