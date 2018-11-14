import React from "react";
import ChildrenLifeCycle from "./ChildrenLifeCycle";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "World",
      destroyed: false,
      rerender: false
    };
  }

  handleChange = () => {
    this.setState(
      // (prevState, props) => ({
      //   value: prevState.value + " wlt"
      // }),
      {
        value: this.state.value + " wlt"
      },
      () => {
        console.log("**** setState callback");
      }
    );

    // this.setState === function
    // arguments:object  | fucntion

    /**
     * 面试的考点1：setState函数的参数可以是一个对象，也可以是一个函数，
     * 如果是一个对象：那么这个对象就是返回的新的state对象
     * 如果是一个函数，那么 函数的第一个参数是prevState，之前的state，因为
     * 整个setState的函数是异步的
     *
     * 面试考点2: setStaet函数它是有两个参数的。第二个参数是回调函数
     */
  };

  handleRerender = () => {
    this.setState({ rerender: true });
  };

  destroyComponent = () => {
    this.setState({ destroyed: true });
  };

  render() {
    if (this.state.destroyed) return null;
    return (
      <div className="parent-life-cycle-bg">
        <p>
          <button onClick={this.handleChange}>改变LifeCyle的props</button>
          <button onClick={this.handleRerender}>
            父组件重新渲染，子组件re-render
          </button>
          <button onClick={this.destroyComponent}>删除组件</button>
        </p>
        <ChildrenLifeCycle value={this.state.value} />
      </div>
    );
  }
}

export default LifeCycle;
