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

export class DetectivePikachuSM194 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Brilliant Deduction", cost: [], damage: "", text: "Look at the top 4 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck." }
  ];
  public set: string = "PR-SM";
  public name: string = "Detective Pikachu";
  public fullName: string = "Detective Pikachu PR-SM SM194";
  public text: string = "Detective Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
