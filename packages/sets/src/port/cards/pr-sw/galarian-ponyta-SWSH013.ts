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

export class GalarianPonytaSWSH013 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heal Pulse", cost: [], damage: "", text: "Heal 30 damage from 1 of your Pokémon." },
      { name: "Flop", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Galarian Ponyta";
  public fullName: string = "Galarian Ponyta PR-SW SWSH013";
  public text: string = "Galarian Ponyta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* heal:30 */ state;
    }
    return state;
  }
}
