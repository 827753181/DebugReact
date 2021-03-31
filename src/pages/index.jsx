import { React, Component } from "../CONST";
import ClasssssComponent from "./flbTest/ClassComponent";
import FunctionsssComponent from "./flbTest/FunctionComponent";

class ClassComponent extends Component {
  render() {
    return <div className="class border">{this.props.name}</div>;
  }
}

function FunctionComponent({ name }) {
  return (
    <div className="function border">
      {name}
      <button onClick={() => console.log("omg")}>click</button>
    </div>
  );
}

const jsx = (
  <div className="box ">
    <p>开课吧</p>
    {/* 
    <FunctionComponent name="函数组件" />
    <ClassComponent name="class组件" /> */}

    <FunctionsssComponent  />
    {/* <ClasssssComponent  /> */}
  </div>
);

export default jsx;
