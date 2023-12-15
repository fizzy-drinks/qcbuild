import CharacterBuilder from "@/components/CharacterBuilder";
import CharacterSheetPreview from "@/components/CharacterSheetPreview";

export default function Home() {
  return (
    <div className="flex w-full h-full gap-12">
      <aside className="basis-[30%] relative w-[30%]">
        <div className="fixed w-[30%] print:w-full p-12">
          <CharacterSheetPreview />
        </div>
      </aside>
      <main className="basis-[40%] p-12 print:hidden">
        <CharacterBuilder />
      </main>
    </div>
  );
}
