import { v4 as uuidv4 } from 'uuid'

export type Player = {
    id:string,
    name:string,
    status:string
}
export function addPlayer(name:string, status:string, listOfPlayers:Player[]){
    const newPlayer:Player = {
        id: uuidv4(), name, status
    }
    listOfPlayers = [...listOfPlayers, newPlayer];
    localStorage.setItem("players",JSON.stringify(listOfPlayers));
    return listOfPlayers;
}