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

export class Golduck_432 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Block", powerType: PowerType.ABILITY, text: "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Play", cost: [], damage: "30+", text: "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand." }
  ];
  public set: string = "HP";
  public name: string = "Golduck δ";
  public fullName: string = "Golduck δ HP 43";
  public text: string = "Golduck δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
