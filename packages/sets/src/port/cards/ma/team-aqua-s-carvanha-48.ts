import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class TeamAquaSCarvanha_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "10", text: "" },
      { name: "Razor Fin", cost: [], damage: "20", text: "" }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Carvanha";
  public fullName: string = "Team Aqua's Carvanha MA 48";
  public text: string = "Team Aqua's Carvanha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
