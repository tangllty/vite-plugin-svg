import { describe, expect, test } from 'vitest'
import { getSvgFiles } from './index'

describe('index test', () => {

  test('test log', async () => {
    await getSvgFiles()
    expect(true).toBe(true)
  })

})