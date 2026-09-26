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

export class Victini_233 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Assisting Flame", cost: [], damage: "20", text: "Attach up to 2 Fire Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Flare", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Victini";
  public fullName: string = "Victini PGO 23";
  public text: string = "Victini";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
