import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createIs_ArrayAtomicAlias = _test_is(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createIs<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
