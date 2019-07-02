const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { map } = require('ramda')

/*
// https://docs.brew.sh/Querying-Brew#brew-info---json
//  "The current schema version is v1. [...]
//  The schema itself is not currently documented
//  outside of the code in formula.rb that generates it."
//
//  see https://github.com/Homebrew/brew/blob/master/Library/Homebrew/formula.rb
*/
const versionSchema = 'v1'
const Formula = require('./formula')[versionSchema]

const brewCommand = `brew info --json=${versionSchema}`

// brewInfo :: []
const brewInfo = async () => {
  const { error, stdout, stderr } = await exec(brewCommand)
  if (error) {
    Promise.reject(stderr)
  }

  return JSON.parse(stdout)
}

// brewInstalled :: [Formula]
const brewInstalled = async () => {
  const { error, stdout, stderr } = await exec(`${brewCommand} --installed`)
  if (error) {
    Promise.reject(stderr)
  }

  const installed = JSON.parse(stdout)
  return map(Formula)(installed)
}

module.exports = {
  brewInfo,
  brewInstalled
}
