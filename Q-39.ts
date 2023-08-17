interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create album dictionaries
  const album1 = makeAlbum("Ed Sheeran", "Divide");
  const album2 = makeAlbum("Taylor Swift", "1989", 16);
  const album3 = makeAlbum("Adele", "25", 12);
  
  // Print album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  