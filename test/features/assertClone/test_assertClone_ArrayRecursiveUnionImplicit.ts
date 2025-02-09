import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertClone_ArrayRecursiveUnionImplicit = _test_assertClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.assertClone<ArrayRecursiveUnionImplicit>(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
