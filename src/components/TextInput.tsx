"use client";

import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={clsx("rounded p-1 bg-slate-500", props.className)}
  />
);

export default TextInput;
