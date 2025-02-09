import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createValidate_ObjectUnionImplicit = _test_validate(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createValidate<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
