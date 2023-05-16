import * as React from "react";

const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
    type: "object",
    properties: {
        id: {type: "integer"},
        name: {type: "string"}
    },
    required: ["id", "name"],
    additionalProperties: false
}

export default class MyAjvObject extends React.Component <{}> {

    obj1 = {id:"123"}
    obj2 = {id:123, name: "ajv object2"}

    render() {
      return (  
        <div>
            MyAjvObject 1 isValid= <b>{ajv.validate(schema, this.obj1)?"Y":"N"}</b>
            <br/>
            MyAjvObject 2 isValid=<b>{ajv.validate(schema, this.obj2)?"Y":"N"}</b>
        </div>
        );
    }

}