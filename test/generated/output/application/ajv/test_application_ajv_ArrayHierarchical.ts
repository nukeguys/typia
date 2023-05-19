import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_application_ajv_ArrayHierarchical = _test_application("ajv")(
    "ArrayHierarchical",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ArrayHierarchical.ICompany",
                },
            },
        ],
        components: {
            schemas: {
                "ArrayHierarchical.ICompany": {
                    $id: "#/components/schemas/ArrayHierarchical.ICompany",
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        serial: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        established_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        departments: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: [
                        "id",
                        "serial",
                        "name",
                        "established_at",
                        "departments",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayHierarchical.ITimestamp": {
                    $id: "#/components/schemas/ArrayHierarchical.ITimestamp",
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
                "ArrayHierarchical.IDepartment": {
                    $id: "#/components/schemas/ArrayHierarchical.IDepartment",
                    type: "object",
                    properties: {
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
                        sales: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        employees: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: [
                        "id",
                        "code",
                        "sales",
                        "created_at",
                        "employees",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayHierarchical.IEmployee": {
                    $id: "#/components/schemas/ArrayHierarchical.IEmployee",
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        age: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        grade: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        employeed_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
