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

export class Clefable_752 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 110;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prankish", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Energy attached to your opponent's Active Pokémon on top of their deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moon Kick", cost: [], damage: "60", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Clefable";
  public fullName: string = "Clefable RCL 75";
  public text: string = "Clefable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
