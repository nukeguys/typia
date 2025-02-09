import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assert_ObjectUnionExplicit = _test_assert(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assert<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
