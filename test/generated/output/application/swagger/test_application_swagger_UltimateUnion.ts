import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_application_swagger_UltimateUnion = _test_application(
    "swagger",
)("UltimateUnion", {
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
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                nullable: false,
                required: ["schemas", "components", "purpose", "prefix"],
                description: '@deprecated Always "#/components/schemas"',
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IEnumeration_lt__doublequote_boolean_doublequote__gt_":
                {
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
                    nullable: false,
                    required: ["enum", "type"],
                    "x-typia-jsDocTags": [],
                },
            "IMetadataTag.IType": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMinimum": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMaximum": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IExclusiveMinimum": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IExclusiveMaximum": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMultipleOf": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IStep": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IFormat": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IPattern": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.ILength": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMinLength": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMaxLength": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IItems": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMinItems": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            "IMetadataTag.IMaxItems": {
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
                nullable: false,
                required: ["kind", "value"],
                "x-typia-jsDocTags": [],
            },
            IJsDocTagInfo: {
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
                nullable: false,
                required: ["name"],
                "x-typia-jsDocTags": [],
            },
            "IJsDocTagInfo.IText": {
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
                nullable: false,
                required: ["text", "kind"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IEnumeration_lt__doublequote_number_doublequote__gt_":
                {
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
                    nullable: false,
                    required: ["enum", "type"],
                    "x-typia-jsDocTags": [],
                },
            "IJsonSchema.IEnumeration_lt__doublequote_string_doublequote__gt_":
                {
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
                    nullable: false,
                    required: ["enum", "type"],
                    "x-typia-jsDocTags": [],
                },
            "IJsonSchema.IBoolean": {
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
                nullable: false,
                required: ["type"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IInteger": {
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
                nullable: false,
                required: ["type"],
                description: "@type int",
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.INumber": {
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
                nullable: false,
                required: ["type"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IString": {
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
                nullable: false,
                required: ["type"],
                description: "@type uint",
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IArray": {
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
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                        $ref: "#/components/schemas/IJsonSchema.ITuple",
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
                nullable: false,
                required: ["items", "type"],
                description: "@type uint",
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.ITuple": {
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
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                nullable: false,
                required: ["items", "type"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IOneOf": {
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
                                    $ref: "#/components/schemas/IJsonSchema.IOneOf",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.ITuple",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/IJsonSchema.IArray",
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
                nullable: false,
                required: ["oneOf"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IReference": {
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
                nullable: false,
                required: ["$ref"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IRecursiveReference": {
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
                nullable: false,
                required: ["$recursiveRef"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.INullOnly": {
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
                nullable: false,
                required: ["type"],
                "x-typia-jsDocTags": [],
            },
            "IJsonSchema.IUnknown": {
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
                nullable: false,
                "x-typia-jsDocTags": [],
            },
            IJsonComponents: {
                type: "object",
                properties: {
                    schemas: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_IJsonComponents.IObject_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["schemas"],
                "x-typia-jsDocTags": [],
            },
            "Record_lt_string_comma__space_IJsonComponents.IObject_gt_": {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
                    $ref: "#/components/schemas/IJsonComponents.IObject",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
                additionalProperties: {
                    $ref: "#/components/schemas/IJsonComponents.IObject",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
            },
            "IJsonComponents.IObject": {
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
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                                $ref: "#/components/schemas/IJsonSchema.IArray",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.ITuple",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                            },
                            {
                                $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                nullable: false,
                required: ["type", "properties"],
                description: "Only when swagger mode.",
                "x-typia-jsDocTags": [],
            },
            Record_lt_string_comma__space_IJsonSchema_gt_: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
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
                            $ref: "#/components/schemas/IJsonSchema.IArray",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
                            $ref: "#/components/schemas/IJsonSchema.IArray",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.ITuple",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        {
                            $ref: "#/components/schemas/IJsonSchema.IOneOf",
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
    purpose: "swagger",
    prefix: "#/components/schemas",
});
