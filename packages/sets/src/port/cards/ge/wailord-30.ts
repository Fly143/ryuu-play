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

export class Wailord_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wailmer";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sleeping Pulse", powerType: PowerType.ABILITY, text: "As long as Wailord remains Asleep between turns, remove 1 damage counter from Wailord.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sink Deep", cost: [], damage: "60", text: "If Wailord has any damage counters on it, Wailord is now Asleep." }
  ];
  public set: string = "GE";
  public name: string = "Wailord";
  public fullName: string = "Wailord GE 30";
  public text: string = "Wailord";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
