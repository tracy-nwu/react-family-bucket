import React from "react";
class ChildrenLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "wlt" };
    this.changeState = this.changeState.bind(this);
    console.log("constructor");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  changeState() {
    this.setState({ name: "sxm" });
  }

  render() {
    console.log("render");
    return (
      <div className="life-cycle-bg">
        <p>Hello {this.props.value}</p>
        <p>Hello {this.state.name}</p>
        <button onClick={this.changeState}>改变lifeCycle的state</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(prevProps, prevState) {
    console.log("componentWillUnmount");
  }
}
export default ChildrenLifeCycle;
