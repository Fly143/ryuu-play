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

export class Hoppip_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cottonweed", powerType: PowerType.ABILITY, text: "If Hoppip has any Grass Energy attached to it, the Retreat Cost for Hoppip is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hover Heal", cost: [], damage: "10", text: "Remove all Special Conditions from Hoppip." }
  ];
  public set: string = "SW";
  public name: string = "Hoppip";
  public fullName: string = "Hoppip SW 90";
  public text: string = "Hoppip";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
