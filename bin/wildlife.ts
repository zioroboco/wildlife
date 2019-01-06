#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk")
import { Stack } from "../lib/stack"

const app = new cdk.App()
new Stack(app, "Stack")
app.run()
