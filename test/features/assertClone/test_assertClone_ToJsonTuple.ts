import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertClone_ToJsonTuple = _test_assertClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.assertClone<ToJsonTuple>(input),
);
