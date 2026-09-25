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

export class GiovanniSNidorino_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Nidoran ♂";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rend", cost: [], damage: "20+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Nidorino";
  public fullName: string = "Giovanni's Nidorino G2 45";
  public text: string = "Giovanni's Nidorino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
