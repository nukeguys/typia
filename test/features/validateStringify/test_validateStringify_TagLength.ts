import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagLength } from "../../structures/TagLength";

export const test_validateStringify_TagLength = _test_validateStringify(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateStringify<TagLength>(input),
    TagLength.SPOILERS,
);
