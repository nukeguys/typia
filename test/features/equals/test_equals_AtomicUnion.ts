import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_equals_AtomicUnion = _test_equals(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) => typia.equals<AtomicUnion>(input),
);
