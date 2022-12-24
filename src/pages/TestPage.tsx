import React from "react";
import FailPage from "./FailPage";
import SuccessPage from "./SuccessPage";

export default function TestPage() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* <SuccessPage /> */}
      <FailPage />
    </div>
  );
}
