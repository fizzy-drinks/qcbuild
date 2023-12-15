"use client";

import { FC } from "react";

import useStoredValue from "@/hooks/useStoredValue";
import StatLine from "@/types/StatLine";

import StatInput from "./StatInput";

const StatField: FC<{
  label: string;
  saveAs: string;
}> = ({ saveAs, label }) => {
  const [val, update] = useStoredValue<StatLine>(saveAs);

  return <StatInput label={label} value={val} onChange={update} />;
};

export default StatField;
