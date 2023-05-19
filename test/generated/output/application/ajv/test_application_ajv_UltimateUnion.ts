import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_application_ajv_UltimateUnion = _test_application("ajv")(
    "UltimateUnion",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/IJsonApplication",
                },
            },
        ],
        components: {
            schemas: {
                IJsonApplication: {
                    $id: "#/components/schemas/IJsonApplication",
                    type: "object",
                    properties: {
                        schemas: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IInteger",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INumber",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IString",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IArray",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.ITuple",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IOneOf",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        components: {
                            $ref: "#/components/schemas/IJsonComponents",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        purpose: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["ajv", "swagger"],
                        },
                        prefix: {
                            deprecated: true,
                            description:
                                '@deprecated Always "#/components/schemas"',
                            "x-typia-jsDocTags": [
                                {
                                    name: "deprecated",
                                    text: [
                                        {
                                            text: 'Always "#/components/schemas"',
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["schemas", "components", "purpose", "prefix"],
                    description: '@deprecated Always "#/components/schemas"',
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_":
                    {
                        $id: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                        type: "object",
                        properties: {
                            enum: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            },
                            default: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["boolean"],
                            },
                            nullable: {
                                description: "Only when swagger mode.",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            deprecated: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            title: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            description: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            "x-typia-metaTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                    ],
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-jsDocTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-required": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-optional": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-rest": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                        },
                        required: ["enum", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "IMetadataTag.IType": {
                    $id: "#/components/schemas/IMetadataTag.IType",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["type"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["int", "uint"],
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMinimum": {
                    $id: "#/components/schemas/IMetadataTag.IMinimum",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["minimum"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMaximum": {
                    $id: "#/components/schemas/IMetadataTag.IMaximum",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["maximum"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IExclusiveMinimum": {
                    $id: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["exclusiveMinimum"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IExclusiveMaximum": {
                    $id: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["exclusiveMaximum"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMultipleOf": {
                    $id: "#/components/schemas/IMetadataTag.IMultipleOf",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["multipleOf"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IStep": {
                    $id: "#/components/schemas/IMetadataTag.IStep",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["step"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IFormat": {
                    $id: "#/components/schemas/IMetadataTag.IFormat",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["format"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: [
                                "url",
                                "uuid",
                                "email",
                                "ipv4",
                                "ipv6",
                                "date",
                                "datetime",
                            ],
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IPattern": {
                    $id: "#/components/schemas/IMetadataTag.IPattern",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["pattern"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.ILength": {
                    $id: "#/components/schemas/IMetadataTag.ILength",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["length"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMinLength": {
                    $id: "#/components/schemas/IMetadataTag.IMinLength",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["minLength"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMaxLength": {
                    $id: "#/components/schemas/IMetadataTag.IMaxLength",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["maxLength"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IItems": {
                    $id: "#/components/schemas/IMetadataTag.IItems",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["items"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMinItems": {
                    $id: "#/components/schemas/IMetadataTag.IMinItems",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["minItems"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                "IMetadataTag.IMaxItems": {
                    $id: "#/components/schemas/IMetadataTag.IMaxItems",
                    type: "object",
                    properties: {
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["maxItems"],
                        },
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["kind", "value"],
                    "x-typia-jsDocTags": [],
                },
                IJsDocTagInfo: {
                    $id: "#/components/schemas/IJsDocTagInfo",
                    type: "object",
                    properties: {
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        text: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo.IText",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                    },
                    required: ["name"],
                    "x-typia-jsDocTags": [],
                },
                "IJsDocTagInfo.IText": {
                    $id: "#/components/schemas/IJsDocTagInfo.IText",
                    type: "object",
                    properties: {
                        text: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        kind: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["text", "kind"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_":
                    {
                        $id: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                        type: "object",
                        properties: {
                            enum: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                            },
                            default: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "number",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["number"],
                            },
                            nullable: {
                                description: "Only when swagger mode.",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            deprecated: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            title: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            description: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            "x-typia-metaTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                    ],
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-jsDocTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-required": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-optional": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-rest": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                        },
                        required: ["enum", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_":
                    {
                        $id: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                        type: "object",
                        properties: {
                            enum: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                            },
                            default: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            type: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                                enum: ["string"],
                            },
                            nullable: {
                                description: "Only when swagger mode.",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            deprecated: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            title: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            description: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            "x-typia-metaTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    oneOf: [
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IType",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IStep",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IFormat",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IPattern",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.ILength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                        {
                                            $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                            "x-typia-required": false,
                                            "x-typia-optional": true,
                                        },
                                    ],
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-jsDocTags": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/IJsDocTagInfo",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            },
                            "x-typia-required": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-optional": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                            "x-typia-rest": {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "boolean",
                            },
                        },
                        required: ["enum", "type"],
                        "x-typia-jsDocTags": [],
                    },
                "IJsonSchema.IBoolean": {
                    $id: "#/components/schemas/IJsonSchema.IBoolean",
                    type: "object",
                    properties: {
                        default: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["boolean"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["type"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IInteger": {
                    $id: "#/components/schemas/IJsonSchema.IInteger",
                    type: "object",
                    properties: {
                        minimum: {
                            description: "@type int",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "int",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                        },
                        maximum: {
                            description: "@type int",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "int",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                        },
                        exclusiveMinimum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        exclusiveMaximum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        multipleOf: {
                            description: "@type int",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "int",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "int",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                        },
                        default: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["integer"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["type"],
                    description: "@type int",
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.INumber": {
                    $id: "#/components/schemas/IJsonSchema.INumber",
                    type: "object",
                    properties: {
                        minimum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        maximum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        exclusiveMinimum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        exclusiveMaximum: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        multipleOf: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        default: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["number"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["type"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IString": {
                    $id: "#/components/schemas/IJsonSchema.IString",
                    type: "object",
                    properties: {
                        minLength: {
                            description: "@type uint",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                            minimum: 0,
                        },
                        maxLength: {
                            description: "@type uint",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                            minimum: 0,
                        },
                        pattern: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        format: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        default: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["string"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["type"],
                    description: "@type uint",
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IArray": {
                    $id: "#/components/schemas/IJsonSchema.IArray",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        items: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IInteger",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        minItems: {
                            description: "@type uint",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                            minimum: 0,
                        },
                        maxItems: {
                            description: "@type uint",
                            "x-typia-metaTags": [
                                {
                                    kind: "type",
                                    value: "uint",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "type",
                                    text: [
                                        {
                                            text: "uint",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "integer",
                            minimum: 0,
                        },
                        "x-typia-tuple": {
                            $recursiveRef:
                                "#/components/schemas/IJsonSchema.ITuple",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["array"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["items", "type"],
                    description: "@type uint",
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.ITuple": {
                    $id: "#/components/schemas/IJsonSchema.ITuple",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IInteger",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INumber",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IString",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.ITuple",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IArray",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IOneOf",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IUnknown",
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
                            enum: ["array"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["items", "type"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IOneOf": {
                    $id: "#/components/schemas/IJsonSchema.IOneOf",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        oneOf: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IInteger",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INumber",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IString",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IOneOf",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.ITuple",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/IJsonSchema.IArray",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["oneOf"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IReference": {
                    $id: "#/components/schemas/IJsonSchema.IReference",
                    type: "object",
                    properties: {
                        $ref: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["$ref"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IRecursiveReference": {
                    $id: "#/components/schemas/IJsonSchema.IRecursiveReference",
                    type: "object",
                    properties: {
                        $recursiveRef: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["$recursiveRef"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.INullOnly": {
                    $id: "#/components/schemas/IJsonSchema.INullOnly",
                    type: "object",
                    properties: {
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["null"],
                        },
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    required: ["type"],
                    "x-typia-jsDocTags": [],
                },
                "IJsonSchema.IUnknown": {
                    $id: "#/components/schemas/IJsonSchema.IUnknown",
                    type: "object",
                    properties: {
                        deprecated: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        title: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-metaTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IType",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMinimum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IExclusiveMaximum",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMultipleOf",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IStep",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IFormat",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IPattern",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.ILength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxLength",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMinItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                    {
                                        $ref: "#/components/schemas/IMetadataTag.IMaxItems",
                                        "x-typia-required": false,
                                        "x-typia-optional": true,
                                    },
                                ],
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-required": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-optional": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        "x-typia-rest": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                    },
                    "x-typia-jsDocTags": [],
                },
                IJsonComponents: {
                    $id: "#/components/schemas/IJsonComponents",
                    type: "object",
                    properties: {
                        schemas: {
                            $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonComponents.IObject_gt_",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["schemas"],
                    "x-typia-jsDocTags": [],
                },
                "Record_lt_string_comma__space_IJsonComponents.IObject_gt_": {
                    $id: "#/components/schemas/Record_lt_string_comma__space_IJsonComponents.IObject_gt_",
                    type: "object",
                    properties: {},
                    "x-typia-jsDocTags": [],
                    additionalProperties: {
                        $ref: "#/components/schemas/IJsonComponents.IObject",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                "IJsonComponents.IObject": {
                    $id: "#/components/schemas/IJsonComponents.IObject",
                    type: "object",
                    properties: {
                        $id: {
                            description: "Used only when ajv mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        $recursiveAnchor: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["object"],
                        },
                        nullable: {
                            description: "Only when swagger mode.",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "boolean",
                        },
                        properties: {
                            $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        patternProperties: {
                            $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                        additionalProperties: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IInteger",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                        required: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                        },
                        description: {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "string",
                        },
                        "x-typia-jsDocTags": {
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/IJsDocTagInfo",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                        },
                        "x-typia-patternProperties": {
                            $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                        "x-typia-additionalProperties": {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IInteger",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INumber",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IString",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IReference",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                    },
                    required: ["type", "properties"],
                    description: "Only when swagger mode.",
                    "x-typia-jsDocTags": [],
                },
                Record_lt_string_comma__space_IJsonSchema_gt_: {
                    $id: "#/components/schemas/Record_lt_string_comma__space_IJsonSchema_gt_",
                    type: "object",
                    properties: {},
                    "x-typia-jsDocTags": [],
                    additionalProperties: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IBoolean",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IInteger",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INumber",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IString",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $recursiveRef:
                                    "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $recursiveRef:
                                    "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $recursiveRef:
                                    "#/components/schemas/IJsonSchema.IOneOf",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IReference",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IRecursiveReference",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.INullOnly",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IUnknown",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        ],
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
