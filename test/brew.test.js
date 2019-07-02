/* global describe, test, expect */
const { brewInfo, brewInstalled } = require('../src/brew')

describe('test command', () => {
  test('brew info', async () => {
    const response = await brewInfo()
    expect(response).toEqual([])
  })

  test('brew install', async () => {
    const installed = await brewInstalled()
    expect(installed).toBeInstanceOf(Array)
  })
})
