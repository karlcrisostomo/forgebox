import { createElement } from "react";

export const highlightSearchMatch = (text: string, query: string) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text
    .split(regex)
    .map((part, i) =>
      regex.test(part) ? createElement("mark", { key: i }, part) : part,
    );
};
