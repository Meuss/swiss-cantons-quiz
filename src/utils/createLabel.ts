export function createLabel(label: string): void {
  const path = document.querySelector<SVGPathElement>(
    `#swiss-map path#${label}`
  );

  if (!path) {
    console.error(`Path element with label '${label}' not found.`);
    return;
  }
  const bbox = path.getBBox();

  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;

  const textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElement.textContent = label;
  textElement.setAttribute("x", `${centerX}`);
  textElement.setAttribute("y", `${centerY}`);
  textElement.setAttribute("text-anchor", "middle");
  textElement.setAttribute("dominant-baseline", "middle");

  const svgContainer = document.getElementById("swiss-map");
  if (svgContainer) {
    svgContainer.appendChild(textElement);
  } else {
    console.error("SVG container not found.");
  }
}

export function deleteLabels(): void {
  const svgContainer = document.getElementById("swiss-map");
  if (svgContainer) {
    const textElements = svgContainer.querySelectorAll("text");
    textElements.forEach((textElement) => {
      svgContainer.removeChild(textElement);
    });
  } else {
    console.error("SVG container not found.");
  }
}
