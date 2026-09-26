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

export class Whimsicott_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cottonee";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sneaky Pocket", cost: [], damage: "", text: "Put a card from your hand in the Lost Zone. If you do, draw 3 cards." },
      { name: "Lost March", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Pokémon, except p (Prism Star) Pokémon, in the Lost Zone." }
  ];
  public set: string = "CEC";
  public name: string = "Whimsicott";
  public fullName: string = "Whimsicott CEC 148";
  public text: string = "Whimsicott";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
