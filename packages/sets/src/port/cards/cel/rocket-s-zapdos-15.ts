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

export class RocketSZapdos_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "20", text: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos." },
      { name: "Electroburn", cost: [], damage: "70", text: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it." }
  ];
  public set: string = "CEL";
  public name: string = "Rocket's Zapdos";
  public fullName: string = "Rocket's Zapdos CEL 15";
  public text: string = "Rocket's Zapdos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
