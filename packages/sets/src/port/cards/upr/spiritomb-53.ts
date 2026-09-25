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

export class Spiritomb_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lightless World", cost: [], damage: "", text: "Put 2 Supporter cards from your discard pile into your hand." },
      { name: "Terrify", cost: [], damage: "10", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." }
  ];
  public set: string = "UPR";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb UPR 53";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard:2 */ state;
    }
    return state;
  }
}
