export interface ITrack {
  albumUrl:{
    album:{
        images:{
            name:string
        }
    }
  };
  artist: string;
  id: string;
  title: string;
  uri: string;
  popularity:number
}
