import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_clone_ArrayAny = _test_clone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.clone<ArrayAny>(input),
);
