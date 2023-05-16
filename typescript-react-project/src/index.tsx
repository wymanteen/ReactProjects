import * as React from "react";
import * as ReactDOM from "react-dom";
import MyObject from "./models/MyObject";
import { isValid } from "./models/MyAjvObjectSchema";

const obj1 = {id:"ABC", name:"ABC"}
const obj2 = {id:222, name:"222"}
const obj3 = {iid:222, iname:"iname"}

ReactDOM.render(
    <div>
    <h1>Testing Object using TypeScript Interface and Ajv</h1>
    <MyObject id={1} name="object 1"/>
    {/*<MyObject id="2" name="object 2"/>
    <MyObject ii="2" nn="object 2"/>*/}
    
    is obj1 &#123;id:"ABC", name:"ABC"&#125; valid= {isValid(obj1)} <br/>
    is obj2 &#123;id:222, name:"222"&#125; valid = {isValid(obj2)} <br/>
    is obj3 &#123;iid:222, iname:"iname"&#125; valid = {isValid(obj3)} <br/>


    <h2>The verdict:</h2>
    1. Interface / Type provided by Typescript already defines the object (i.e., the primitive type, required by "?")<br/>
    2. Ajv provided these restriction + additional validation <br/>
    <b>!!!No need to use them tgt!!!</b>
    </div>
    ,
    document.getElementById("root")
);