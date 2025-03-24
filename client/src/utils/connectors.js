export const connectorFormFields = [
  {
    id: 0,
    name: "Amazon S3 to BigQuery Connector",
    type: "API",
    source: "Amazon S3",
    destination: "Google BigQuery",
    authentication: {
      apiKey: "abc123xyz789",
      username: "admin_user",
      password: "secure_password",
      token: "Bearer xyz123token",
    },
    configuration: {
      endpoint: "https://s3.amazonaws.com/my-bucket",
      port: "443",
      databaseName: "bigquery-dataset",
      tableName: "customer_data",
      schema: "public",
      fileFormat: "CSV",
      batchSize: "1000",
    },
    scheduling: {
      frequency: "Daily",
      cronExpression: "0 12 * * *",
    },
    status: "active",
    createdAt: "2025-03-20 17:44",
  },
];
