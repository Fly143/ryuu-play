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

export class Dragapult_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drakloak";
  public hp: number = 150;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Launcher", cost: [], damage: "", text: "Discard a number of your Benched Dreepy up to the number of your opponent's Pokémon in play. Then, for each Dreepy you discarded in this way, choose 1 of your opponent's Pokémon and do 100 damage to it. You can't choose the same Pokémon more than once. This damage isn't affected by Weakness or Resistance." },
      { name: "Spooky Shot", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Dragapult";
  public fullName: string = "Dragapult PGO 89";
  public text: string = "Dragapult";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
