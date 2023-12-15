"use client";

import { FC } from "react";

import StatLine from "@/types/StatLine";

import TextInput from "./TextInput";

const StatInput: FC<{
  value?: StatLine;
  onChange?: (val: StatLine) => void;
  readOnly?: boolean;
  label?: string;
}> = ({ label, value, onChange, readOnly }) => {
  return (
    <div className="flex gap-2 my-1 items-center">
      {label}
      <label className="flex flex-col items-center">
        STR
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, str: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.str || 0}
        />
      </label>
      <label className="flex flex-col items-center">
        DEX
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, dex: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.dex || 0}
        />
      </label>
      <label className="flex flex-col items-center">
        CON
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, con: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.con || 0}
        />
      </label>
      <label className="flex flex-col items-center">
        INT
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, int: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.int || 0}
        />
      </label>
      <label className="flex flex-col items-center">
        WIS
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, wis: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.wis || 0}
        />
      </label>
      <label className="flex flex-col items-center">
        CHA
        <TextInput
          readOnly={readOnly}
          className="w-12 text-center"
          onChange={(event) =>
            onChange?.({ ...value, cha: Number(event.target.value) || 0 })
          }
          type="number"
          value={value?.cha || 0}
        />
      </label>
    </div>
  );
};

export default StatInput;
