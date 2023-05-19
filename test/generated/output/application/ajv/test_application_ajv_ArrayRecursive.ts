import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_application_ajv_ArrayRecursive = _test_application("ajv")(
    "ArrayRecursive",
    {
        schemas: [
            {
                $recursiveRef: "#/components/schemas/ArrayRecursive.ICategory",
            },
        ],
        components: {
            schemas: {
                "ArrayRecursive.ICategory": {
                    $id: "#/components/schemas/ArrayRecursive.ICategory",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        children: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $recursiveRef:
                                    "#/components/schemas/ArrayRecursive.ICategory",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        sequence: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: [
                        "children",
                        "id",
                        "code",
                        "sequence",
                        "created_at",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursive.ITimestamp": {
                    $id: "#/components/schemas/ArrayRecursive.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        zone: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["time", "zone"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
