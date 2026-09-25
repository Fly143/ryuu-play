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

export class Moltres_212 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fire Immunity", powerType: PowerType.ABILITY, text: "You can't attach Fire Energy cards from your hand to Moltres.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collect Fire", cost: [], damage: "10", text: "If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres." },
      { name: "Burning Tail", cost: [], damage: "60", text: "Flip a coin. If tails, discard a Fire Energy card attached to Moltres." }
  ];
  public set: string = "SK";
  public name: string = "Moltres";
  public fullName: string = "Moltres SK 21";
  public text: string = "Moltres";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
