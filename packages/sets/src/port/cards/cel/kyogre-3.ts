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

export class Kyogre_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aqua Storm", cost: [], damage: "", text: "Discard the top 5 cards of your deck, and then choose 2 of your opponent's Benched Pokémon. This attack does 50 damage for each Energy card you discarded in this way to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Surf", cost: [], damage: "120", text: "" }
  ];
  public set: string = "CEL";
  public name: string = "Kyogre";
  public fullName: string = "Kyogre CEL 3";
  public text: string = "Kyogre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* millThenHitBench:5:50 */ state;
    }
    return state;
  }
}
