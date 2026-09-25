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

export class Starmie_532 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Multishot Star", cost: [], damage: "", text: "Discard any amount of Water Energy from this Pokémon. Then, for each Energy card you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "EVS";
  public name: string = "Starmie";
  public fullName: string = "Starmie EVS 53";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
