import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectDynamic } from "../../../../structures/ObjectDynamic";

export const test_application_swagger_ObjectDynamic = _test_application(
    "swagger",
)("ObjectDynamic", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectDynamic",
        },
    ],
    components: {
        schemas: {
            ObjectDynamic: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
                    oneOf: [
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    ],
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
                additionalProperties: {
                    oneOf: [
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    ],
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
