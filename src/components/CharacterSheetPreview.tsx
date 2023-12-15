"use client";

import { FC } from "react";

import useStoredValue from "@/hooks/useStoredValue";
import StatLine from "@/types/StatLine";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StatInput from "./StatInput";
import TextInput from "./TextInput";

const statToMod = (stat: number | undefined): number =>
  Math.floor(((stat || 0) - 10) / 2);

const addStats = (
  statsA: StatLine | undefined,
  statsB: StatLine | undefined,
): StatLine => ({
  str: (statsA?.str || 0) + (statsB?.str || 0),
  dex: (statsA?.dex || 0) + (statsB?.dex || 0),
  con: (statsA?.con || 0) + (statsB?.con || 0),
  int: (statsA?.int || 0) + (statsB?.int || 0),
  wis: (statsA?.wis || 0) + (statsB?.wis || 0),
  cha: (statsA?.cha || 0) + (statsB?.cha || 0),
});

const CharacterSheetPreview: FC = () => {
  const [charName] = useStoredValue<string>("charName");
  const [charBackstory] = useStoredValue<string>("charBackstory");
  const [abilityScores] = useStoredValue<StatLine>("abilityScores");
  const [raceName] = useStoredValue<string>("raceName");
  const [raceASI] = useStoredValue<StatLine>("raceASI");
  const [magicalInclination] = useStoredValue<number>("magicalInclination");
  const [weaponChoice] = useStoredValue<string>("weaponChoice");

  const statTotals = addStats(abilityScores, raceASI);

  const items = {
    "": [],
    mace: ["Maça", "Escudo"],
    daggers: ["Adaga x2"],
    halberd: ["Alabarda"],
    bow: ["Arco", "Flecha x10"],
    scrolls: [],
  }[weaponChoice || ""];

  const scrollsCount =
    [3, 2, 1, 0][magicalInclination || 0] + +(weaponChoice === "scrolls") * 2;

  return (
    <>
      <div className="print:hidden">
        <Heading>Pré-visualização</Heading>
        <button
          className="border-2 font-bold rounded border-slate-300 p-2 my-2 print:hidden"
          onClick={() => print()}
        >
          Imprimir ficha
        </button>
      </div>
      <div className="bg-slate-600 text-slate-300 rounded shadow-md px-3 py-1 print:text-black print:p-0 print:shadow-none">
        <Heading>{charName}</Heading>
        <Paragraph className="text-gray-300 text-bold">{raceName}</Paragraph>
        <Paragraph>{charBackstory}</Paragraph>
        <Heading className="text-xl">Pontos de habilidade</Heading>
        <StatInput value={statTotals} readOnly />
        <Heading className="text-xl">Modificadores</Heading>
        <StatInput
          value={{
            str: statToMod(statTotals?.str),
            dex: statToMod(statTotals?.dex),
            con: statToMod(statTotals?.con),
            int: statToMod(statTotals?.int),
            wis: statToMod(statTotals?.wis),
            cha: statToMod(statTotals?.cha),
          }}
          readOnly
        />
        <div className="gap-1 flex">
          <label className="flex-col flex gap-1 items-center">
            CA
            <TextInput
              readOnly
              value={
                10 + statToMod(statTotals?.dex) + +(weaponChoice === "mace") * 2
              }
              className="w-12 text-center"
            />
          </label>
          <label className="flex-col flex gap-1 items-center">
            Iniciativa
            <TextInput
              readOnly
              value={statToMod(statTotals?.dex)}
              className="w-12 text-center"
            />
          </label>
          <label className="flex-col flex gap-1 items-center">
            PV
            <TextInput
              readOnly
              value={
                statToMod(statTotals?.con) + (6 + (magicalInclination || 0) * 2)
              }
              className="w-12 text-center"
            />
          </label>
        </div>
        <Heading className="text-xl">Inventário</Heading>
        <ul>
          {items?.map((i) => (
            <li key={i} className="list-disc ml-6">
              {i}
            </li>
          ))}
          {scrollsCount > 0 && (
            <li className="list-disc ml-6">
              Pergaminho mágico x{scrollsCount}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default CharacterSheetPreview;
