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

export class Banette_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tool Concealment", powerType: PowerType.ABILITY, text: "Each Pokémon Tool card in play has no effect.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshot", cost: [], damage: "60", text: "" }
  ];
  public set: string = "AOR";
  public name: string = "Banette";
  public fullName: string = "Banette AOR 31";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
