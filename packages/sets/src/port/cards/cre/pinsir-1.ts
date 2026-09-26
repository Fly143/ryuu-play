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

export class Pinsir_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vise Coach", powerType: PowerType.ABILITY, text: "Damage from your Single Strike Pokémon's attacks isn't affected by your opponent's Active Pokémon's Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seismic Toss", cost: [], damage: "110", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Pinsir";
  public fullName: string = "Pinsir CRE 1";
  public text: string = "Pinsir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
