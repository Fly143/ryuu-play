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

export class Thievul_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nickit";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fumbling Hands", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have each player shuffle their hand and put it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player draws 4 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tail Smack", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Thievul";
  public fullName: string = "Thievul CRE 105";
  public text: string = "Thievul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
