import React, { Component } from "react";

class MicroFrontend extends Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/assets-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `${host}/${manifest[`${name}.js`]}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  componentWillUnmount() {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, history, params } = this.props;

    window[`render${name}`](`${name}-container`, history, params);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

export default MicroFrontend;
