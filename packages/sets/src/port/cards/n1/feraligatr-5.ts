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

export class Feraligatr_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Downpour", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand. This power can't be used if Feraligatr is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Riptide", cost: [], damage: "10+", text: "Does 10 damage plus 10 damage times the number of Water Energy cards in your discard pile. Then, shuffle all Water Energy cards from your discard pile into your deck." }
  ];
  public set: string = "N1";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr N1 5";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
