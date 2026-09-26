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

export class Clefairy_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Doll Swap", cost: [], damage: "60", text: "Put this Pokémon and all cards attached to it into your hand. If you do, you may play Lillie's Poké Doll from your hand as your new Active Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Clefairy";
  public fullName: string = "Clefairy CEC 144";
  public text: string = "Clefairy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
