import React from "react";
import { useFormContext } from "react-hook-form";

export default function FormControl(WrappedComponent) {
  return function ControlledComponent({ name, label, rules = {}, ...props }) {
    const {
      register,
      formState: { errors },
    } = useFormContext(); 

    return (
      <div className="mb-12">
        <label className="p-2">{label}</label>
        <WrappedComponent {...register(name, rules)} {...props} />
        {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
      </div>
    );
  };
}
