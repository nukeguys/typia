import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagPattern } from "../../structures/TagPattern";

export const test_clone_TagPattern = _test_clone(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.clone<TagPattern>(input),
);
