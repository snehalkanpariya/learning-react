import "./App.css";
import Albumcard from "./components/Albumcard";

function App() {
  const albumsData = [
    {
      id: 1,
      title: "Diamonds",
      artist: "Rihanna",
      coverUrl:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300",
      isActive: false,
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      coverUrl:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300",
      isActive: true, // The featured center card
    },
    {
      id: 3,
      title: "Anti-Hero",
      artist: "Taylor Swift",
      coverUrl:
        "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300",
      isActive: false,
    },
    {
      id:4,
      title: "Aavan Javan",
      artist: "Arijit",
      coverUrl:
      "https://www.bing.com/images/search?view=detailV2&ccid=dpcNqu4v&id=34F2806FF1A8F2DBF88F3E9CBEFECD54720D3366&thid=OIP.dpcNqu4vtClZ_PfsiePjGwHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2f8w7U0IdNZPs%2fmaxresdefault.jpg&exph=720&expw=1280&q=AAvan+jaavan&FORM=IRPRST&ck=E3A108B77C731C5C35869287C9799828&selectedIndex=3&itb=0" ,
     isActive: false,
    }
  ];
  return (
    <div className="music-dashboard">
      <div className="player-container">
        <div className="album-carousel">
          {albumsData.map((album) => (
            <Albumcard
              key={album.id}
              title={album.title}
              artist={album.artist}
              coverUrl={album.coverUrl}
              isActive={album.isActive}
            />
          ))}
        </div>

        <div className="player-controls">
          <div className="control-buttons">⏮</div>
          <div className="control-buttons">⏸</div>
          <div className="control-buttons">⏭</div>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>
            Blinding Lights • The Weeknd
          </div>
          <div className="control-buttons">🔊</div>
        </div>
      </div>
    </div>
  );
}

export default App;
