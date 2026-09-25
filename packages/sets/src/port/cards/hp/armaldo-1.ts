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

export class Armaldo_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Anorith";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delta Edge", cost: [], damage: "70", text: "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70." },
      { name: "Fossil Charge", cost: [], damage: "50", text: "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "HP";
  public name: string = "Armaldo δ";
  public fullName: string = "Armaldo δ HP 1";
  public text: string = "Armaldo δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
