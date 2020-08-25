import * as components from "./autogenerated-components-map";
import React from "react";
import ReactDOM from "react-dom";

const placeholders = document.querySelectorAll("[data-hydration-id");

for (const placeholder of placeholders) {
  const renderRoot = placeholder.parentNode;
  const id = placeholder.getAttribute("data-hydration-id");
  const { props, componentName } = window.__hydrationData[id];
  const Component = components[componentName];
  // Remove before hydrating so that the newly rendered Component matches
  // the existing DOM structure.
  placeholder.remove();
  ReactDOM.hydrate(<Component {...props} />, renderRoot);
}

delete window.__hydrationData;
