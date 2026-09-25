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

export class AlolanDugtrio_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Diglett";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gold Rush", cost: [], damage: "30×", text: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way." }
  ];
  public set: string = "UPR";
  public name: string = "Alolan Dugtrio";
  public fullName: string = "Alolan Dugtrio UPR 79";
  public text: string = "Alolan Dugtrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
