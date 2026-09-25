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

export class NSReshiram_167 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powerful Rage", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on this Pokémon." },
      { name: "Virtuous Flame", cost: [], damage: "170", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "N's Reshiram";
  public fullName: string = "N's Reshiram JTG 167";
  public text: string = "N's Reshiram";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
