function showMagicians(magiciansList: string[]): void {
    for (let magician of magiciansList) {
      console.log(magician);
    }
  }
  
  function makeGreat(magiciansList: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let magician of magiciansList) {
      greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
  }
  
  const magicianNames2: string[] = ["David Copperfield", "Houdini", "David Blaine", "Penn & Teller"];
  
  const greatMagicians1 = makeGreat([...magicianNames2]);
  
  console.log("Original Magicians:");
  showMagicians(magicianNames2);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagicians1);
  