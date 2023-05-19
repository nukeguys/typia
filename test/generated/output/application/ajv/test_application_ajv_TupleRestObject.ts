import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_application_ajv_TupleRestObject = _test_application("ajv")(
    "TupleRestObject",
    {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "boolean",
                        },
                        {
                            type: "number",
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/TupleRestObject.IObject",
                            },
                        },
                    ],
                },
                "x-typia-tuple": {
                    type: "array",
                    items: [
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            $ref: "#/components/schemas/TupleRestObject.IObject",
                            "x-typia-rest": true,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "TupleRestObject.IObject": {
                    $id: "#/components/schemas/TupleRestObject.IObject",
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
