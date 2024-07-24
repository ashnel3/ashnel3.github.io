import { describe, expect, test } from 'vitest'
import assert from '../../src/util/assert'

describe('assert.ts', () => {
  test('should fail on falsy', () => {
    expect(() => assert(null)).toThrow()
  })

  test('should return input', () => {
    expect(assert(128)).toBe(128)
  })
})
