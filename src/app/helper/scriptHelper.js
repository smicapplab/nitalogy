const loadScript = (src) => {
  const script = document.createElement("script");
  script.src = src;
  script.id = src.toString();
  document.body.appendChild(script);
};

const removeScript = (scriptRefArr) => {
  scriptRefArr.forEach((item) => {
    if (document.getElementById(item.toString())) {
      document.getElementById(item.toString()).remove();
    }
  });
};

export { loadScript, removeScript };