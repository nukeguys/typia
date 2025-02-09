import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_createIs_TagTypeBigInt = _test_is(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input: any): input is TagTypeBigInt => {
        return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
        );
    },
    TagTypeBigInt.SPOILERS,
);
