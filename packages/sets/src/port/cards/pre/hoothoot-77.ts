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

export class Hoothoot_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Insomnia", powerType: PowerType.ABILITY, text: "This Pokémon can't be Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PRE";
  public name: string = "Hoothoot";
  public fullName: string = "Hoothoot PRE 77";
  public text: string = "Hoothoot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
