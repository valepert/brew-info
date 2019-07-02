/* global describe, test, expect */
const request = require('supertest')
const Formula = require('../src/brew/formula')['v1']

const endpoint = 'https://formulae.brew.sh'

const formulas =
[
  'binutils',
  'curl',
  'openssl',
  'pkg-config',
  'zlib'
]

describe('test formula', () => {
  test.each(formulas)('check API against package %s', async (name) => {
    const response = await request(endpoint).get(`/api/formula/${name}.json`)
    expect(Formula(response.body)).toHaveProperty('name', name)
  })
})
