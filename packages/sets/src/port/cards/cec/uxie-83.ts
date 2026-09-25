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

export class Uxie_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Secret Territory", powerType: PowerType.ABILITY, text: "If you have Mesprit and Azelf in play, apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshot", cost: [], damage: "30", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Uxie";
  public fullName: string = "Uxie CEC 83";
  public text: string = "Uxie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
