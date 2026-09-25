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

export class HeatRotom_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Roto Motor", powerType: PowerType.ABILITY, text: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heat Blast", cost: [], damage: "80", text: "" }
  ];
  public set: string = "UPR";
  public name: string = "Heat Rotom";
  public fullName: string = "Heat Rotom UPR 24";
  public text: string = "Heat Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
