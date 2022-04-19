#!/usr/bin/node

const pkg = require("./package.json");
const commander = require("commander");

const program = new commander.Command();

program.version(pkg.version);

// error on unknown commands
program.on("command:*", function () {
  console.error(
    `
ERROR : Invalid command: ${program.args.join(" ")}.
Please you must use a command (start, status, ...)
`
  );
  program.outputHelp();
  process.exit(1);
});

// start to run
program.parse(process.argv);
