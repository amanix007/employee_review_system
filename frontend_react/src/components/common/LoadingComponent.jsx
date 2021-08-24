import React, { Component } from "react";

import Lottie from "react-lottie";
import * as progress_bar from "./progress_bar.json";
import * as loading from "./loading.json";

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }
  render() {
    let { type, loadingMessage } = this.props;
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loading.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    if (type === "progress_bar") {
      defaultOptions.animationData = progress_bar.default;
    }
    return (
      <div className="LoadingComponent">
        {/* {loadingMessage && <h4 className="text-center">{loadingMessage}</h4>} */}
        <Lottie options={defaultOptions}
          height={400} width={400} loop={true}
          autoplay={true} isStopped={this.state.isStopped}
          isPaused={this.state.isPaused} />
      </div>
    );
  }
}

export default LoadingComponent;
