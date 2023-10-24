function loadComponentContent(componentName, containerId) {
  fetch(`components/${componentName}/${componentName}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
    });
}

export { loadComponentContent };
