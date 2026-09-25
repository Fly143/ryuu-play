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

export class Hawlucha_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shining Spirit", powerType: PowerType.ABILITY, text: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flying Press", cost: [], damage: "60", text: "If your opponent's Active Pokémon isn't a Pokémon-EX, this attack does nothing." }
  ];
  public set: string = "FFI";
  public name: string = "Hawlucha";
  public fullName: string = "Hawlucha FFI 63";
  public text: string = "Hawlucha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
