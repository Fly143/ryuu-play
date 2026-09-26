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

export class Crawdaunt_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corphish";
  public hp: number = 130;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vise Grip", cost: [], damage: "30", text: "" },
      { name: "Cutting Riposte", cost: [], damage: "130", text: "If this Pokémon has any damage counters on it, this attack can be used for Darkness." }
  ];
  public set: string = "MEG";
  public name: string = "Crawdaunt";
  public fullName: string = "Crawdaunt MEG 85";
  public text: string = "Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
