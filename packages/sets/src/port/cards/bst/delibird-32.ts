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

export class Delibird_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Icy Snow", cost: [], damage: "10", text: "" },
      { name: "Package Delivery", cost: [], damage: "", text: "Put this Pokémon and all attached cards into your deck. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck." }
  ];
  public set: string = "BST";
  public name: string = "Delibird";
  public fullName: string = "Delibird BST 32";
  public text: string = "Delibird";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
