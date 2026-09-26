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

export class Boltund_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yamper";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electrifying Dash", cost: [], damage: "50", text: "Search your deck for up to 2 Basic Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "TEF";
  public name: string = "Boltund";
  public fullName: string = "Boltund TEF 59";
  public text: string = "Boltund";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
