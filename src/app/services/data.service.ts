import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  teams = [
    {name:'Team1',players:11},
    {name:'Team2',players:10},
    {name:'Team3',players:5},
    {name:'Team4',players:6},
  ]

  constructor() { }
}
