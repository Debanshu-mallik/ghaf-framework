const core = require("@actions/core")

async function run() {
  try {
    core.info("GHAF starting...")

    // Temporary stub
    core.info("Framework scaffold ready.")

  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()