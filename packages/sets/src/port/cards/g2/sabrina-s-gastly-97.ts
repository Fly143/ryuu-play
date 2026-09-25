import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class SabrinaSGastly_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gaseous Form", powerType: PowerType.ABILITY, text: "Sabrina's Gastly gets +10 HP for each Psychic Energy card attached to it. This power works even if Sabrina's Gastly is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Suffocating Gas", cost: [], damage: "30", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Gastly";
  public fullName: string = "Sabrina's Gastly G2 97";
  public text: string = "Sabrina's Gastly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
