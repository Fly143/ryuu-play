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

export class AlolanRaichu_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electro Rain", cost: [], damage: "", text: "Discard any amount of Lightning Energy from this Pokémon. Then, for each Energy you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance." },
      { name: "Electric Ball", cost: [], damage: "90", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Alolan Raichu";
  public fullName: string = "Alolan Raichu CEC 57";
  public text: string = "Alolan Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
