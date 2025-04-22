import React from "react";

function SubjectIcon({ name, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
      </div>
      <div className="text-lg font-medium text-black">{name}</div>
    </div>
  );
}

export default SubjectIcon;
