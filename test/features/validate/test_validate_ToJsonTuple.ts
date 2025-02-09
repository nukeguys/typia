import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_validate_ToJsonTuple = _test_validate(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.validate<ToJsonTuple>(input),
);
