import React from "react";
import { RiVirusLine } from "react-icons/ri";

export const BulletedListItem = ({ children }) => {
  return (
    <li className="flex content-start space-x-2">
      <RiVirusLine className="text-4xl leading-none mt-1" />
      <div>{children}</div>
    </li>
  );
};
