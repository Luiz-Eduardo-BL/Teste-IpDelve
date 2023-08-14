import { MouseEventHandler } from "react";

interface FormActionProps {
  handleSubmit: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
  action?: "submit" | "button" | "reset";
  text: string;
}

export default function FormAction({
  handleSubmit,
  type = "button",
  action = "submit",
  text,
}: FormActionProps) {
  return (
    <>
      {type === "button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <a
          href="#"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit as MouseEventHandler<HTMLAnchorElement>}
        >
          {text}
        </a>
      )}
    </>
  );
}
