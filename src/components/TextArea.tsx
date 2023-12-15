"use client";

import clsx from "clsx";
import { FC, TextareaHTMLAttributes } from "react";

import useStoredValue from "@/hooks/useStoredValue";

const TextArea: FC<{
  label: string;
  saveAs: string;
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}> = ({ label, saveAs, inputProps }) => {
  const [val, update] = useStoredValue<string>(saveAs);

  return (
    <label className="block my-1">
      {label}{" "}
      <textarea
        {...inputProps}
        onChange={(event) => update(event.target.value)}
        value={val}
        className={clsx("rounded p-1 bg-slate-500", inputProps?.className)}
      />
    </label>
  );
};

export default TextArea;
