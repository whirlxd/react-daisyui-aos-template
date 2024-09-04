import React from "react";

export type HelloWorldProps = {
  message: string;
};

const HelloWorld: React.FC<HelloWorldProps> = ({ message }) => {
  return (
    <div className="text-center transition ease-in-out cursor-grab text-9xl hover:scale-50">
      {message}
    </div>
  );
};

export default HelloWorld;
