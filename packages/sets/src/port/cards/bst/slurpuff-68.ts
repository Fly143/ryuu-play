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

export class Slurpuff_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swirlix";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Follow the Scent", cost: [], damage: "", text: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand." },
      { name: "Fairy Wind", cost: [], damage: "80", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Slurpuff";
  public fullName: string = "Slurpuff BST 68";
  public text: string = "Slurpuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
