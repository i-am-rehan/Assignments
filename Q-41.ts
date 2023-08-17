function showMagicians1(magiciansList: string[]): void {
    for (let magician of magiciansList) {
      console.log(magician);
    }
  }
  
  function makeGreat(magiciansList: string[]): void {
    for (let i = 0; i < magiciansList.length; i++) {
      magiciansList[i] = "the Great " + magiciansList[i];
    }
  }
  
  const magicianNames1: string[] = ["David Copperfield", "Houdini", "David Blaine", "Penn & Teller"];
  
  const greatMagicians = [...magicianNames1];
  makeGreat(greatMagicians);
  
  showMagicians1(greatMagicians);
  