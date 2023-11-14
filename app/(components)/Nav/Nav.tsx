"use client";
import React, { useState } from "react";
import TopNav from "./TopNav";
import MidNav from "./MidNav";
import BotNav from "./BotNav";

type Props = {};

const Nav = (props: Props) => {
  const [isBotNavOpened, setBotNavOpened] = useState(true);

  return (
    <>
      <TopNav />
      <MidNav setBotNavOpened={setBotNavOpened} />
      {isBotNavOpened && (
        <div
          className={`navbar ${
            isBotNavOpened
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          } transition-opacity duration-1000 ease-in-out z-0`}
        >
          <BotNav />
        </div>
      )}
    </>
  );
};

export default Nav;
