import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_validate_ObjectPrimitive = _test_validate(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.validate<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
