import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { MapAlias } from "../../../../structures/MapAlias";

export const test_application_ajv_MapAlias = _test_application("ajv")(
    "MapAlias",
    {
        schemas: [
            {
                $ref: "#/components/schemas/MapAlias",
            },
        ],
        components: {
            schemas: {
                MapAlias: {
                    $id: "#/components/schemas/MapAlias",
                    type: "object",
                    properties: {
                        boolean: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        number: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        strings: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        arrays: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        objects: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                    },
                    required: [
                        "boolean",
                        "number",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    "x-typia-jsDocTags": [],
                },
                Map: {
                    type: "object",
                    $id: "#/components/schemas/Map",
                    properties: {},
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
