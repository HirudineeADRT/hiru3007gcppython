// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.hiru3007gcppythonfunction = require("./hiru3007gcppython/function.js").handler;
exports.hiru3007gcppythondependencytest = require("./hiru3007gcppython/dependencytest.py").handler;