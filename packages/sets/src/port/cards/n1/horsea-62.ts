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

export class Horsea_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fin Slap", cost: [], damage: "20+", text: "If an attack damaged Horsea during your opponent's last turn, this attack does 20 damage plus 10 more damage. If not, this attack does 20 damage." }
  ];
  public set: string = "N1";
  public name: string = "Horsea";
  public fullName: string = "Horsea N1 62";
  public text: string = "Horsea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
