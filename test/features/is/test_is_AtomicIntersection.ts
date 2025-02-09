import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_is_AtomicIntersection = _test_is(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) => typia.is<AtomicIntersection>(input),
    AtomicIntersection.SPOILERS,
);
