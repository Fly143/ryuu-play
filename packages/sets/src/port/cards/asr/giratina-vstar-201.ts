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

export class GiratinaVSTAR_201 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giratina V";
  public hp: number = 280;
    public height?: number = 4.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Impact", cost: [], damage: "280", text: "Put 2 Energy attached to your Pokémon in the Lost Zone." },
      { name: "Star Requiem", cost: [], damage: "", text: "You can use this attack only if you have 10 or more cards in the Lost Zone. Your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "ASR";
  public name: string = "Giratina VSTAR";
  public fullName: string = "Giratina VSTAR ASR 201";
  public text: string = "Giratina VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
