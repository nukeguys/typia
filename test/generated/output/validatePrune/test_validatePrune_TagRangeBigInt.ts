import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_validatePrune_TagRangeBigInt = _test_validatePrune(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) =>
        ((input: any): typia.IValidation<TagRangeBigInt> => {
            const validate = (
                input: any,
            ): typia.IValidation<TagRangeBigInt> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagRangeBigInt => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "bigint" === typeof input.greater &&
                        BigInt(3) < input.greater &&
                        "bigint" === typeof input.greater_equal &&
                        BigInt(3) <= input.greater_equal &&
                        "bigint" === typeof input.less &&
                        BigInt(7) > input.less &&
                        "bigint" === typeof input.less_equal &&
                        BigInt(7) >= input.less_equal &&
                        "bigint" === typeof input.greater_less &&
                        BigInt(3) < input.greater_less &&
                        BigInt(7) > input.greater_less &&
                        "bigint" === typeof input.greater_equal_less &&
                        BigInt(3) <= input.greater_equal_less &&
                        BigInt(7) > input.greater_equal_less &&
                        "bigint" === typeof input.greater_less_equal &&
                        BigInt(3) < input.greater_less_equal &&
                        BigInt(7) >= input.greater_less_equal &&
                        "bigint" === typeof input.greater_equal_less_equal &&
                        BigInt(3) <= input.greater_equal_less_equal &&
                        BigInt(7) >= input.greater_equal_less_equal &&
                        "bigint" === typeof input.equal &&
                        BigInt(10) <= input.equal &&
                        BigInt(10) >= input.equal;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.validatePrune as any).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagRangeBigInt => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRangeBigInt.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TagRangeBigInt.Type",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "TagRangeBigInt.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagRangeBigInt.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("bigint" === typeof input.greater &&
                                    (BigInt(3) < input.greater ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater",
                                        expected: "bigint",
                                        value: input.greater,
                                    }),
                                ("bigint" === typeof input.greater_equal &&
                                    (BigInt(3) <= input.greater_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal",
                                        expected: "bigint",
                                        value: input.greater_equal,
                                    }),
                                ("bigint" === typeof input.less &&
                                    (BigInt(7) > input.less ||
                                        $report(_exceptionable, {
                                            path: _path + ".less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less",
                                        expected: "bigint",
                                        value: input.less,
                                    }),
                                ("bigint" === typeof input.less_equal &&
                                    (BigInt(7) >= input.less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".less_equal",
                                        expected: "bigint",
                                        value: input.less_equal,
                                    }),
                                ("bigint" === typeof input.greater_less &&
                                    (BigInt(3) < input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less,
                                        })) &&
                                    (BigInt(7) > input.greater_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less",
                                        expected: "bigint",
                                        value: input.greater_less,
                                    }),
                                ("bigint" === typeof input.greater_equal_less &&
                                    (BigInt(3) <= input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less,
                                        })) &&
                                    (BigInt(7) > input.greater_equal_less ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_equal_less",
                                            expected:
                                                "bigint (@exclusiveMaximum 7)",
                                            value: input.greater_equal_less,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_equal_less",
                                        expected: "bigint",
                                        value: input.greater_equal_less,
                                    }),
                                ("bigint" === typeof input.greater_less_equal &&
                                    (BigInt(3) < input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected:
                                                "bigint (@exclusiveMinimum 3)",
                                            value: input.greater_less_equal,
                                        })) &&
                                    (BigInt(7) >= input.greater_less_equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".greater_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".greater_less_equal",
                                        expected: "bigint",
                                        value: input.greater_less_equal,
                                    }),
                                ("bigint" ===
                                    typeof input.greater_equal_less_equal &&
                                    (BigInt(3) <=
                                        input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@minimum 3)",
                                            value: input.greater_equal_less_equal,
                                        })) &&
                                    (BigInt(7) >=
                                        input.greater_equal_less_equal ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".greater_equal_less_equal",
                                            expected: "bigint (@maximum 7)",
                                            value: input.greater_equal_less_equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path + ".greater_equal_less_equal",
                                        expected: "bigint",
                                        value: input.greater_equal_less_equal,
                                    }),
                                ("bigint" === typeof input.equal &&
                                    (BigInt(10) <= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@minimum 10)",
                                            value: input.equal,
                                        })) &&
                                    (BigInt(10) >= input.equal ||
                                        $report(_exceptionable, {
                                            path: _path + ".equal",
                                            expected: "bigint (@maximum 10)",
                                            value: input.equal,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "bigint",
                                        value: input.equal,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagRangeBigInt",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagRangeBigInt",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: TagRangeBigInt): void => {
                const $io1 = (input: any): boolean =>
                    "bigint" === typeof input.greater &&
                    BigInt(3) < input.greater &&
                    "bigint" === typeof input.greater_equal &&
                    BigInt(3) <= input.greater_equal &&
                    "bigint" === typeof input.less &&
                    BigInt(7) > input.less &&
                    "bigint" === typeof input.less_equal &&
                    BigInt(7) >= input.less_equal &&
                    "bigint" === typeof input.greater_less &&
                    BigInt(3) < input.greater_less &&
                    BigInt(7) > input.greater_less &&
                    "bigint" === typeof input.greater_equal_less &&
                    BigInt(3) <= input.greater_equal_less &&
                    BigInt(7) > input.greater_equal_less &&
                    "bigint" === typeof input.greater_less_equal &&
                    BigInt(3) < input.greater_less_equal &&
                    BigInt(7) >= input.greater_less_equal &&
                    "bigint" === typeof input.greater_equal_less_equal &&
                    BigInt(3) <= input.greater_equal_less_equal &&
                    BigInt(7) >= input.greater_equal_less_equal &&
                    "bigint" === typeof input.equal &&
                    BigInt(10) <= input.equal &&
                    BigInt(10) >= input.equal;
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    });
                const $po0 = (input: any): any => {
                    if (Array.isArray(input.value)) $pp0(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "greater" === key ||
                            "greater_equal" === key ||
                            "less" === key ||
                            "less_equal" === key ||
                            "greater_less" === key ||
                            "greater_equal_less" === key ||
                            "greater_less_equal" === key ||
                            "greater_equal_less_equal" === key ||
                            "equal" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagRangeBigInt.SPOILERS,
);
