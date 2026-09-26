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

export class Pawmot_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pawmo";
  public hp: number = 140;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Voltaic Fist", cost: [], damage: "130", text: "You may have this Pokémon also do 60 damage to itself and make your opponent's Active Pokémon Paralyzed." }
  ];
  public set: string = "PFL";
  public name: string = "Pawmot";
  public fullName: string = "Pawmot PFL 34";
  public text: string = "Pawmot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
