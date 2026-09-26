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

export class GalarianSlowkingV_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Concoction", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 3 cards." },
      { name: "Word of Ruin", cost: [], damage: "", text: "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out." }
  ];
  public set: string = "BST";
  public name: string = "Galarian Slowking V";
  public fullName: string = "Galarian Slowking V BST 99";
  public text: string = "Galarian Slowking V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
