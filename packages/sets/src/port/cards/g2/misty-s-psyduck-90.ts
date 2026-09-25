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

export class MistySPsyduck_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "ESP", cost: [], damage: "", text: "Flip 3 coins. If exactly 1 is heads, draw a card. If exactly 2 are heads, this attack does 20 damage. If all 3 are heads, choose 1 of the Defending Pokémon's attacks. Misty's Psyduck copies that attack except for its Energy costs. (No matter what type the Defending Pokémon is, Misty's Psyduck's type is still Water.)" }
  ];
  public set: string = "G2";
  public name: string = "Misty's Psyduck";
  public fullName: string = "Misty's Psyduck G2 90";
  public text: string = "Misty's Psyduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* metronome */ state;
    }
    return state;
  }
}
