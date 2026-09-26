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

export class CorvisquireSV102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rookidee";
  public hp: number = 80;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pluck", cost: [], damage: "20", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." },
      { name: "Drill Peck", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Corvisquire";
  public fullName: string = "Corvisquire SHF SV102";
  public text: string = "Corvisquire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
