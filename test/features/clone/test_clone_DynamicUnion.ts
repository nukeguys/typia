import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_clone_DynamicUnion = _test_clone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.clone<DynamicUnion>(input),
);
