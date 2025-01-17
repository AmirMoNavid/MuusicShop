import React from "react";

const FadeBackgroundImage = ({ imageUrl }) => {
  return (
    <div
      className="absolute right-0 top-[-1rem] h-full w-full bg-black bg-cover bg-no-repeat opacity-100 blur-md brightness-90  dark:brightness-50 lg:h-[100%] lg:blur-lg"
      style={{
        backgroundImage: "url(" + `${imageUrl}` + ")",
      }}
    ></div>
  );
};
export default FadeBackgroundImage;
