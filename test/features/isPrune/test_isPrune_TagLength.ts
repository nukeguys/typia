import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagLength } from "../../structures/TagLength";

export const test_isPrune_TagLength = _test_isPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.isPrune<TagLength>(input),
    TagLength.SPOILERS,
);
