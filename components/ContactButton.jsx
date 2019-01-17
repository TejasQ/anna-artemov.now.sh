import React from "react";
import { EMAIL } from "../util/constants";
import Button from "./Button";

const ContactButton = ({ style, children }) => (
  <a href={`mailto:${EMAIL}`}>
    <Button color="primary" style={{ margin: "0 auto", ...style }}>
      {children}
    </Button>
  </a>
);

ContactButton.defaultProps = {
  children: "Kontakt",
};

export default ContactButton;
