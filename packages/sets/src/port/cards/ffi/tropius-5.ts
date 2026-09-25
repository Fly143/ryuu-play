import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Tropius_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Return", cost: [], damage: "10", text: "Draw cards until you have 6 cards in your hand." },
      { name: "Energy Press", cost: [], damage: "20+", text: "Does 20 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Tropius";
  public fullName: string = "Tropius FFI 5";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* drawUntilHand:6 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* bonusPerEnergyDefending:20 */ state;
    }
    return state;
  }
}
