import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_application_ajv_ArrayRecursiveUnionImplicit =
    _test_application("ajv")("ArrayRecursiveUnionImplicit", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                        },
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                        },
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ArrayRecursiveUnionImplicit.IDirectory": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                    $recursiveAnchor: true,
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["id", "name", "path", "children"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.ISharedDirectory": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        access: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["read", "write"],
                        },
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["access", "id", "name", "path", "children"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IImageFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        width: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        height: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        url: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "width",
                        "height",
                        "url",
                        "size",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.ITextFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        content: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["id", "name", "path", "size", "content"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IZipFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        count: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["id", "name", "path", "size", "count"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IShortcut": {
                    $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                    $recursiveAnchor: true,
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
                        path: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        target: {
                            oneOf: [
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "name", "path", "target"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    });
