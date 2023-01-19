import { assert } from "chai"

import { merge } from "@src/wip"

describe("merge", function () {

    it("should not mutate the first argument", function () {
        const x = {
            a: "A",
            b: "B",
            c: "C",
            d: "D",
        }
        const y = {
            a: undefined,
            b: null,
            c: 3,
            d: false,
        }
        merge(x, y)
        assert.equal(x.a, "A")
    })

    it("should overwrite with false", function () {
        const x = { a: true  }
        const y = { a: false }
        const z = merge(x, y)
        assert.equal(z.a, false)
    })

})
