import cdk = require("@aws-cdk/cdk")

export class WildlifeStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
    super(parent, name, props)
  }
}
