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

export class Poltchageist_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tea Server", cost: [], damage: "", text: "Put a Basic Grass Energy card from your discard pile into your hand." },
      { name: "Surprise Attack", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "TWM";
  public name: string = "Poltchageist";
  public fullName: string = "Poltchageist TWM 21";
  public text: string = "Poltchageist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
