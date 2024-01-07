import React from "react";
import { getTextAlign, getFontSize } from "utils/fonts";
export const Heading = ({ textAlign = "left", content, level = 2 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `heading font-heading max-w-5xl mx-auto my-5 ${getTextAlign(
      textAlign
    )} ${getFontSize(level)}`,
  });
  return <div className="heading">{tag}</div>;
};
