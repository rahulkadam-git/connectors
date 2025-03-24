import React, { useState } from "react";
import Stepper from "../../Component/Stepper/Stepper";
import SelectService from "../../Component/Forms/SelectService";
import { FormProvider, useForm } from "react-hook-form";
import { connectorsSchema } from "../../utils/connectorSchema";
import DynamicSteps from "../../Component/Forms/CustomComponent/DynamicStep/DynamicSteps";
import FinalData from "./FinalData";
import { connectorFormFields } from "../../utils/connectors";

export default function CreateConnector() {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [collectedData, setCollectedData] = useState({});

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

  const schema = connectorsSchema[selectedService] || [];
  const currentFields =
    currentStep === 0
      ? []
      : schema.find((s) => s.step === currentStep)?.fields || [];

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
      id: connectorFormFields.length,
    }));

    setCurrentStep((prev) => prev + 1);
  };

  const handleFormSubmit = (data) => {
    const finalData = {
      ...collectedData,
      ...data,
    };
    console.log("Final Data:", finalData);
  };

  const selectServiceData = {
    setSelectedService,
    handleServiceChange,
    setName,
    setType,
    type,
    name,
    selectedService,
  };

  return (
    <div className="flex p-5">
      <div>
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="w-[70%] m-auto">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            {currentStep > 0 && (
              <div className="bg-gray-100 p-4 rounded mt-4">
                <h3 className="text-lg font-bold">Collected Data</h3>
                <pre className="bg-white p-2 rounded text-sm">
                  {Object.entries(collectedData).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {JSON.stringify(value)}
                    </div>
                  ))}
                </pre>
              </div>
            )}
            {currentStep === 0 && (
              <SelectService selectServiceData={selectServiceData} />
            )}
            {currentStep >= 1 && currentStep <= schema.length && (
              <DynamicSteps fields={currentFields} />
            )}

            <div>
              {currentStep >= schema.length + 1 && (
                <FinalData collectedData={collectedData} action="create" />
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
      </div>
    </div>
  );
}
