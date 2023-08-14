import { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="flex justify-center items-center mt-4">
      {pageNumber > 1 && (
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={false}
          ripple="dark"
          className="border-0"
          onClick={() => updatePageNumber(pageNumber - 1)}
        >
          <ArrowLeftIcon size={width > 640 ? 24 : 20} className="mr-1" />
          Prev
        </Button>
      )}

      {pageNumber > 1 && (
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={false}
          ripple="dark"
          className="border-0"
          onClick={() => updatePageNumber(pageNumber - 1)}
        >
          {pageNumber - 1}
        </Button>
      )}

      <Button
        color="blue"
        buttonType="filled"
        rounded={true}
        iconOnly={false}
        ripple="light"
        className="border-0"
      >
        {pageNumber}
      </Button>

      {pageNumber < info.pages && (
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={false}
          ripple="dark"
          className="border-0"
          onClick={() => updatePageNumber(pageNumber + 1)}
        >
          {pageNumber + 1}
        </Button>
      )}

      {pageNumber < info.pages && (
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={false}
          ripple="dark"
          className="border-0"
          onClick={() => updatePageNumber(pageNumber + 1)}
        >
          Next
          <ArrowRightIcon size={width > 640 ? 24 : 20} className="ml-1" />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
