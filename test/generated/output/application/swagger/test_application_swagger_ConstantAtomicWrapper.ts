import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_application_swagger_ConstantAtomicWrapper = _test_application(
    "swagger",
)("ConstantAtomicWrapper", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                    },
                ],
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ConstantAtomicWrapper.IPointer_lt_boolean_gt_": {
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                nullable: false,
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
            "ConstantAtomicWrapper.IPointer_lt_number_gt_": {
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
            "ConstantAtomicWrapper.IPointer_lt_string_gt_": {
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
