import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Bibarel_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bidoof";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Industrious Incisors", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw cards until you have 5 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Smash", cost: [], damage: "100", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "FST";
  public name: string = "Bibarel";
  public fullName: string = "Bibarel FST 121";
  public text: string = "Bibarel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* drawUntilHand:5 */ state;
    }
    return state;
  }
}
