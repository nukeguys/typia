import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_assertStringify_TagTuple = _test_assertStringify(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.assertStringify<TagTuple>(input),
    TagTuple.SPOILERS,
);
