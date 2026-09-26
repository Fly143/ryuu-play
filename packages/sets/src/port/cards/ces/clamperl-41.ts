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

export class Clamperl_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Advantage", powerType: PowerType.ABILITY, text: "If you go second, this Pokémon can evolve during your first turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sparkling Pearl", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Clamperl";
  public fullName: string = "Clamperl CES 41";
  public text: string = "Clamperl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
