import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { connectorsSchema } from "../../utils/connectorSchema";
import DynamicSteps from "../../Component/Forms/CustomComponent/DynamicStep/DynamicSteps";
import { connectorFormFields } from "../../utils/connectors";
import SelectService from "../../Component/Forms/SelectService";
import FinalData from "./FinalData";

export default function UpdateForm() {
  const steps = [
    { title: "General Data", iconPath: "M1 5.917 5.724 10.5 15 1.5" },
    {
      title: "Bucket Specs",
      iconPath:
        "M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z",
    },
    {
      title: "Additional Data",
      iconPath:
        "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z",
    },
    {
      title: "Review And Submit",
      iconPath:
        "M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [collectedData, setCollectedData] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(connectorsSchema);

  const connector = connectorFormFields.find((c) => c.id === parseInt(id));
  console.log(connector);
  if (!connector) {
    return <div className="p-4 text-red-500">Connector not found!</div>;
  }

  const schema = connectorsSchema[connector.selectedService] || [];
  const currentFields =
    currentStep === 0
      ? []
      : schema.find((s) => s.step === currentStep)?.fields || [];

  console.log(currentFields);
  const methods = useForm({
    defaultValues: connector,
    mode: "onBlur",
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    const finalData = {
      ...collectedData,
      ...data,
    };
    console.log("Final Data:", finalData);
  };

  const handleServiceChange = (e) => {
    e.preventDefault();
    setCurrentStep(1);

    setCollectedData((prev) => ({
      ...prev,
      selectedService,
      name,
      type,
      id: connectorFormFields.length,
    }));
  };

  const handleNextStep = async () => {
    const isValid = await methods.trigger();
    if (!isValid) return;

    const stepData = methods.getValues();
    setCollectedData((prev) => ({
      ...prev,
      ...stepData,
      selectedService,
      name,
      type,
      id,
    }));

    setCurrentStep((prev) => prev + 1);
  };

  const selectServiceData = {
    setSelectedService,
    handleServiceChange,
    setName,
    setType,
    type: connector.type || "",
    name: connector.name || "",
    selectedService: connector.selectedService || "",
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Update Connector</h2>

        {currentStep === 0 && (
          <SelectService selectServiceData={selectServiceData} />
        )}
        {currentStep >= 1 && currentStep <= schema.length && (
          <DynamicSteps fields={currentFields} />
        )}

        <div>
          {currentStep >= schema.length + 1 && (
            <FinalData collectedData={collectedData} action="update" />
          )}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Back
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Review Data
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
