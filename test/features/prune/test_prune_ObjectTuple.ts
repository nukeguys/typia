import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_prune_ObjectTuple = _test_prune(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.prune<ObjectTuple>(input),
);
