import * as React from "react";

interface MyObjectType {
  id: number
  name: string
  //createdDate: Date
}

export default class MyObject extends React.Component<MyObjectType, {}> {
   
    constructor (props: MyObjectType){    
        super(props);
    }

    
    render() {
      return (  
        <div>
            MyObject: &#123;id:{this.props.id} name:"{this.props.name}"&#125;
        </div>
        );
      }
    }