export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-serverlessdeploymentbucket-pfvcl87hh7bh",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zny3axswdi.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_MNH1SCDvX",
    APP_CLIENT_ID: "7o1qm40aq5hms6hojf2p5sv75b",
    IDENTITY_POOL_ID: "us-east-1:174872a9-8e88-49fe-8911-e9824c4c3e75",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_XOl3hffDu1mqEJEGgxqCT79Z007LOUeNZ2",
};
