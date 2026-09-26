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

export class ShiningCelebiSM79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Time Recall", powerType: PowerType.ABILITY, text: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Step", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SM";
  public name: string = "Shining Celebi";
  public fullName: string = "Shining Celebi PR-SM SM79";
  public text: string = "Shining Celebi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
