export type TestConfig = {
  positions: Array<[number, number, number]>
  colliding: {
    [tupleKey: string]: boolean
  }
}

export const collisionMatrixConfigs: TestConfig[] = [
  {
    positions: [
      [0, 0, 0],
      [2, 0, 0],
      [0, 4, 0],
      [2, 4, 0],
      [0, 8, 0],
      [2, 8, 0],
    ],
    colliding: {
      '0-1': true,
      '2-3': true,
      '4-5': true,
    },
  },
  {
    positions: [
      [0, 0, 0],
      [0, 4, 0],
      [0, 8, 0],
      [2, 0, 0],
      [2, 4, 0],
      [2, 8, 0],
    ],
    colliding: {
      '0-3': true,
      '1-4': true,
      '2-5': true,
    },
  },
  {
    positions: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 10, 0],
      [0, 20, 0],
      [0, 30, 0],
      [0, 40, 0],
      [0, 50, 0],
      [0, 51, 0],
    ],
    colliding: {
      '0-1': true,
      '6-7': true,
    },
  },
]
