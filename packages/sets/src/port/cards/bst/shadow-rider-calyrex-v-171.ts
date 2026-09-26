import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class ShadowRiderCalyrexV_171 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shadow Mist", cost: [], damage: "10", text: "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand." },
      { name: "Astral Barrage", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon and put 5 damage counters on each of them." }
  ];
  public set: string = "BST";
  public name: string = "Shadow Rider Calyrex V";
  public fullName: string = "Shadow Rider Calyrex V BST 171";
  public text: string = "Shadow Rider Calyrex V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
