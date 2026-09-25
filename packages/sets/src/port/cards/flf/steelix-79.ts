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

export class Steelix_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Defender", cost: [], damage: "50", text: "During your opponent's next turn, this Pokémon has no Weakness." },
      { name: "Heavy Impact", cost: [], damage: "100", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Steelix";
  public fullName: string = "Steelix FLF 79";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* noWeaknessNextTurn */ state;
    }
    return state;
  }
}
