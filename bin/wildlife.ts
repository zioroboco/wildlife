#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk")
import { WildlifeStack } from "../lib/stack"

const app = new cdk.App()
new WildlifeStack(app, "WildlifeStack")
app.run()
