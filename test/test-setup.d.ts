/// <reference types="@types/jest" />
import type { TestConfig } from './helpers'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeColliding(testConfig: TestConfig): R
      toMatchCloseTo(expected: number[], precision?: number): R
    }
  }
}
