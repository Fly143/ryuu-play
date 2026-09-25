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

export class Umbreon_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Shade", powerType: PowerType.ABILITY, text: "Each of your Team Plasma Pokémon in play gets +20 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Fang", cost: [], damage: "70", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Umbreon";
  public fullName: string = "Umbreon FLF 64";
  public text: string = "Umbreon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
