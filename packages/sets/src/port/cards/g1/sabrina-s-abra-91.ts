import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class SabrinaSAbra_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Loop", cost: [], damage: "20", text: "Return a Psychic Energy card attached to Sabrina's Abra to your hand in order to use this attack." }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Abra";
  public fullName: string = "Sabrina's Abra G1 91";
  public text: string = "Sabrina's Abra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
