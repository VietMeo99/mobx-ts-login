import React from "react";
import { observer } from "mobx-react";
import { store } from "../stores/MobxStore";

@observer
export default class Demo extends React.Component<any, any> {
  render() {
      return <div>
        <p>{store.getResult}</p>
        <button onClick={() => store.count -= 1} style={{padding: '.5em 1em'}}>-</button>
        <button onClick={() => store.count += 1} style={{padding: '.5em 1em'}}>+</button>
      </div>
  }
}