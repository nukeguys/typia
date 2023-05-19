import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_application_ajv_ArrayRecursiveUnionExplicit =
    _test_application("ajv")("ArrayRecursiveUnionExplicit", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                        },
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ArrayRecursiveUnionExplicit.IDirectory": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
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
                                            "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["directory"],
                        },
                    },
                    required: ["id", "name", "path", "children", "type"],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IImageFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
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
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["jpg"],
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
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.ITextFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
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
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["txt"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "content",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IZipFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
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
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["zip"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "count",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IShortcut": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
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
                                        "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["lnk"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "target",
                        "type",
                        "extension",
                    ],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    });
