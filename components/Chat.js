class Chat extends React.Component {
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "617303d0-6591-4d02-86f3-58aa6a52ac9d";
    (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  render() {
    return null;
  }
}

export default Chat;
