"use client";
import PurpleLine from "../../../public/icons/purpleLine.svg";
import BlueLine from "../../../public/icons/blueLine.svg";

export default function Lines() {
  return (
    <div className="relative">
      <PurpleLine className="absolute z-0 -top-[40px]" />
      <BlueLine className="absolute z-10" />
    </div>
  );
}
