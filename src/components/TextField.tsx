"use client";

import { FC, HTMLAttributes } from "react";

import useStoredValue from "@/hooks/useStoredValue";

import TextInput from "./TextInput";

const TextField: FC<{
  label: string;
  saveAs: string;
  inputProps?: HTMLAttributes<HTMLInputElement>;
}> = ({ label, saveAs, inputProps }) => {
  const [val, update] = useStoredValue<string>(saveAs);

  return (
    <label className="block my-1">
      {label}{" "}
      <TextInput
        {...inputProps}
        onChange={(event) => update(event.target.value)}
        value={val}
      />
    </label>
  );
};

export default TextField;
