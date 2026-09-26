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

export class GougingFireEx_214 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heat Blast", cost: [], damage: "60", text: "" },
      { name: "Blaze Blitz", cost: [], damage: "260", text: "This Pokémon can't use Blaze Blitz again until it leaves the Active Spot." }
  ];
  public set: string = "TEF";
  public name: string = "Gouging Fire ex";
  public fullName: string = "Gouging Fire ex TEF 214";
  public text: string = "Gouging Fire ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
