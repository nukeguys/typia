import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_validateClone_DynamicComposite = _test_validateClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validateClone<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
