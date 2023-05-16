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

function isValid(data: any){
    return ajv.validate(schema, data)?'Y':'N'; 
};

export {isValid};