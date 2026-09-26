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

export class Lycanroc_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rockruff";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turbo Edge", cost: [], damage: "50", text: "Attach up to 2 Basic Fighting Energy cards from your discard pile to your Benched Pokémon in any way you like." }
  ];
  public set: string = "TEF";
  public name: string = "Lycanroc";
  public fullName: string = "Lycanroc TEF 90";
  public text: string = "Lycanroc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
