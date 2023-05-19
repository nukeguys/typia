import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionExplicit } from "../../../../structures/ObjectUnionExplicit";

export const test_application_swagger_ObjectUnionExplicit = _test_application(
    "swagger",
)("ObjectUnionExplicit", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_",
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_":
                {
                    type: "object",
                    properties: {
                        x: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        y: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["point"],
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["line"],
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPoint": {
                type: "object",
                properties: {
                    x: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    y: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["x", "y"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p3: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["triangle"],
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p3: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        p4: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["rectangle"],
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "p4", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_":
                {
                    type: "object",
                    properties: {
                        points: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["polyline"],
                        },
                    },
                    nullable: false,
                    required: ["points", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_":
                {
                    type: "object",
                    properties: {
                        outer: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        inner: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["polygon"],
                        },
                    },
                    nullable: false,
                    required: ["outer", "inner", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPolyline": {
                type: "object",
                properties: {
                    points: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["points"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_":
                {
                    type: "object",
                    properties: {
                        centroid: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        radius: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["circle"],
                        },
                    },
                    nullable: false,
                    required: ["centroid", "radius", "type"],
                    "x-typia-jsDocTags": [],
                },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
