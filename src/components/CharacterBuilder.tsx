"use client";

import useStoredValue from "@/hooks/useStoredValue";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StatField from "./StatField";
import TextArea from "./TextArea";
import TextField from "./TextField";

const CharacterBuilder = () => {
  const [magicalInclination, setMagicalInclination] = useStoredValue<number>(
    "magicalInclination",
    1,
  );

  const [weaponChoice, setWeaponChoice] =
    useStoredValue<string>("weaponChoice");

  return (
    <>
      <Heading>Criador de personagens: AMMP</Heading>
      <Paragraph>
        O primeiro passo para criar o seu personagem é definir um nome e uma
        história.
      </Paragraph>
      <TextField label="Qual é o seu nome?" saveAs="charName" />
      <TextArea
        label="Escreva uma ou duas frases sobre seu personagem."
        saveAs="charBackstory"
        inputProps={{ className: "w-full block" }}
      />
      <Heading>Pontos de habilidade</Heading>
      <Paragraph>Hora de rolar os pontos de habilidade.</Paragraph>
      <StatField label="Pontos de habilidade:" saveAs="abilityScores" />
      <Heading>Raça</Heading>
      <TextField label="Nome da raça:" saveAs="raceName" />
      <StatField label="Bônus de habilidades:" saveAs="raceASI" />
      <Heading>Inclinação mágica</Heading>
      <Paragraph>
        Agora é a hora que você decide suas afinidades no combate. Seu
        personagem é um lançador de feitiços ou alguém que prefere pegar em
        armas?
      </Paragraph>
      <label>
        Mais feitiços{" "}
        <input
          type="range"
          min={0}
          max={3}
          value={magicalInclination}
          onChange={(ev) => setMagicalInclination(Number(ev.target.value))}
        />{" "}
        Mais vida
      </label>
      <Paragraph>
        {
          [
            "3 pergaminhos mágicos, PV = 6+CON",
            "2 pergaminhos mágicos, PV = 8+CON",
            "1 pergaminho mágico, PV = 10+CON",
            "Nenhum pergaminho mágico, PV = 12+CON",
          ][magicalInclination || 0]
        }
      </Paragraph>
      <Heading>Itens iniciais</Heading>
      <Paragraph>
        Escolha sua arma de preferência. Você tem proficiência no uso dela.
      </Paragraph>
      <select
        className="bg-black py-2 rounded border-2 border-white"
        onChange={(ev) => setWeaponChoice(ev.target.value)}
        value={weaponChoice}
      >
        <option />
        <option value="mace">
          Maça (corpo-a-corpo, 1d6 contundente) + Escudo (+2 CA)
        </option>
        <option value="daggers">
          Duas adagas (corpo-a-corpo, 1d6 cortante)
        </option>
        <option value="halberd">
          Alabarda (duas mãos, pesada, longo alcance, 1d10 cortante)
        </option>
        <option value="bow">
          Arco curto (duas mãos, alcance 25/100m, 1d6 perfurante) + 10 flechas
        </option>
        <option value="scrolls">
          Nenhuma arma, em troca de +2 pergaminhos
        </option>
      </select>
    </>
  );
};

export default CharacterBuilder;
