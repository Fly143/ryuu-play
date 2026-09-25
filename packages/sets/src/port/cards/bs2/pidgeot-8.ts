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

export class Pidgeot_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pidgeotto";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "20", text: "" },
      { name: "Hurricane", cost: [], damage: "30", text: "Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent's hand." }
  ];
  public set: string = "BS2";
  public name: string = "Pidgeot";
  public fullName: string = "Pidgeot BS2 8";
  public text: string = "Pidgeot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* bounceDefending */ state;
    }
    return state;
  }
}
