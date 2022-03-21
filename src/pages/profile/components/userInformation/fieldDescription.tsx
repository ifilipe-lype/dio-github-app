import React from "react";

interface IFieldDescriptionProps {
    icon: JSX.Element,
    body: JSX.Element
}

export function FieldDescription({ icon, body }: IFieldDescriptionProps) {
  return (
    <div className="flex text-sm text-gray-500 gap-2 items-center">
      <span className="">
          {icon}
      </span>
      { body}
    </div>
  );
}

export default FieldDescription;
