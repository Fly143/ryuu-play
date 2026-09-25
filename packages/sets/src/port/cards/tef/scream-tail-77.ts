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

export class ScreamTail_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Supportive Singing", cost: [], damage: "", text: "Heal 100 damage from 1 of your Benched Ancient Pokémon." },
      { name: "Hyper Voice", cost: [], damage: "40", text: "" }
  ];
  public set: string = "TEF";
  public name: string = "Scream Tail";
  public fullName: string = "Scream Tail TEF 77";
  public text: string = "Scream Tail";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* heal:100 */ state;
    }
    return state;
  }
}
