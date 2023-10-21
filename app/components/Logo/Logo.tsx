import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link style={{ fontFamily: "Impact", fontSize: "30px" }} href={"/"}>
      Believe
    </Link>
  );
}

export default Logo;
