import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_validate_TagObjectUnion = _test_validate(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validate<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
