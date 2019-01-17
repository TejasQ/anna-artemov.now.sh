import React from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import { EMAIL } from "../util/constants";

const Nav = ({ activePage, light }) => (
  <>
    <NavLink active={activePage === "ueber-anna"} light={light}>
      <Link href="/ueber-anna">Über Anna</Link>
    </NavLink>
    <NavLink active={activePage === "vortraege"} light={light}>
      <Link href="/vortraege">Vorträge</Link>
    </NavLink>
    <NavLink active={activePage === "coaching"} light={light}>
      <Link href="/coaching">Coaching</Link>
    </NavLink>

    <NavLink light={light} end>
      <a style={{ marginLeft: "auto" }} href={`mailto:${EMAIL}`}>
        Kontakt
      </a>
    </NavLink>
  </>
);

export default Nav;
