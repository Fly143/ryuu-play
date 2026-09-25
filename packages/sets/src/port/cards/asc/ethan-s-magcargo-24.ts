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

export class EthanSMagcargo_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ethan's Slugma";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Melt Away", powerType: PowerType.ABILITY, text: "If this Pokémon has no Energy attached, it has no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lava Burst", cost: [], damage: "70×", text: "Discard up to 5 Fire Energy from this Pokémon. This attack does 70 damage for each card you discarded in this way." }
  ];
  public set: string = "ASC";
  public name: string = "Ethan's Magcargo";
  public fullName: string = "Ethan's Magcargo ASC 24";
  public text: string = "Ethan's Magcargo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
