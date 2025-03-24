import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInput, FormSelect } from "../FormControl/WrappedComponent";

const componentMap = { FormInput, FormSelect };

export default function DynamicSteps({ fields }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="p-5 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Step Form</h2>
      <div className="space-y-4">
        {fields.map(({ component, name, label, ...field }) => {
          const Component = componentMap[component];

          return Component ? (
            <div key={name}>
              <label className="block font-medium mb-1">{label}</label>
              <Component {...register(name)} {...field} className="border p-2 w-full" />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
            </div>
          ) : (
            <div key={name} className="text-red-600 font-semibold">
              Unsupported field type: {component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
