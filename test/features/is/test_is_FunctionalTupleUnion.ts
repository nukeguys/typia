import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_is_FunctionalTupleUnion = _test_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.is<FunctionalTupleUnion>(input),
    FunctionalTupleUnion.SPOILERS,
);
