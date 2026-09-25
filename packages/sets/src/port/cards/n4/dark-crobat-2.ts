import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class DarkCrobat_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Golbat";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Surprise Bite", powerType: PowerType.ABILITY, text: "When you play Dark Crobat from your hand, you may choose 1 of your opponent's Pokémon. This power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Drain", cost: [], damage: "", text: "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "N4";
  public name: string = "Dark Crobat";
  public fullName: string = "Dark Crobat N4 2";
  public text: string = "Dark Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* damageOneBench:10 */ state;
    }
    return state;
  }
}
