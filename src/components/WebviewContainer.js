const createWebview = () => {
  webview = document.createElement("webview");
  webview.setAttribute("src", url);
  container = document.getElementById("#webviewContainer webview");
  container.appendChild(webview);
};

const ref = () => document.querySelector("#webviewContainer webview");

const navigateToUrl = (url) => {
  ref().loadURL(url);
};

const refresh = () => {
  ref().isLoading() ? ref().scrollTop() : ref().reload();
};

const back = () => {
  ref().canGoBack() && ref().goBack();
};

const forward = () => {
  ref().canGoForward() && ref().goForward();
};

const stop = () => {
  ref().stop();
};
