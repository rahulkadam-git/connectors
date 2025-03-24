export const connectorsSchema = {
  amazon: [
    {
      step: 1,
      fields: [
        { label: "Access Key", name: "accessKey", type: "text", component: "FormInput", required: true },
        { label: "Secret Key", name: "secretKey", type: "password", component: "FormInput", required: true },
        { label: "Recursive", name: "recursive", type: "radio", component: "FormInput", required: true },

        { label: "Region", name: "region", type: "select", options: ["us-east-1", "us-west-2"], component: "FormSelect", required: true },
      ],
    },
    {
      step: 2,
      fields: [
        { label: "Custom Url", name: "customUrl", type: "text", component: "FormInput", required: true },
        ],
    },

    
  ],
  google_drive: [
    {
      step: 1,
      fields: [
        { label: "OAuth Token", name: "oauthToken", type: "text", component: "FormInput", required: true },
        { label: "Scopes", name: "scopes", type: "text", component: "FormInput", required: true },
      ],
    },
  ],
};
