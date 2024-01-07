export const getTextAlign = (alignment) => {
  const alignments = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return `${alignments[alignment] || ""}`;
};

export const getFontSize = (size) => {
  const sizes = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  return `${sizes[size] || ""}`;
};
