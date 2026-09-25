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

export class EeveeSWSH042 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Signs of Evolution", cost: [], damage: "", text: "Search your deck for a card that evolves from Eevee, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Wild Kick", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "PR-SW";
  public name: string = "Eevee";
  public fullName: string = "Eevee PR-SW SWSH042";
  public text: string = "Eevee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
