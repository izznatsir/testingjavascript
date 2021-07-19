const { Worker } = require('jest-worker')
const { fail, pass } = require('create-jest-runner')

module.exports = async ({ testPath }) => {
  const worker = new Worker(require.resolve('./require-module'))

  worker.getStdout().pipe(process.stdout)
  worker.getStderr().pipe(process.stderr)
  process.stdout.write('\n')

  const start = new Date()
  try {
    await worker.require(testPath)
    await worker.end()
    return pass({
      start,
      end: Date.now(),
      test: {
        path: testPath,
      },
    })
  } catch (error) {
    await worker.end()
    return fail({
      start,
      end: Date.now(),
      test: {
        path: testPath,
        errorMessage: error.message,
        title: `Test failure: \n${error.message}`,
      },
    })
  }
}
