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

export class Gourgeist_452 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pumpkaboo";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gourgantic", powerType: PowerType.ABILITY, text: "If this Pokémon has any Grass Energy attached to it, its maximum HP is 200.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Horror Note", cost: [], damage: "10×", text: "This attack does 10 damage times the number of cards in your hand." }
  ];
  public set: string = "PHF";
  public name: string = "Gourgeist";
  public fullName: string = "Gourgeist PHF 45";
  public text: string = "Gourgeist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesHand:10:self */ state;
    }
    return state;
  }
}
