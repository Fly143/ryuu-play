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

export class Huntail_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clamperl";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Diver's Catch", powerType: PowerType.ABILITY, text: "When 1 of your Water Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, you may put all Basic Water Energy attached to that Pokémon into your hand instead of the discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "80", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Huntail";
  public fullName: string = "Huntail DRI 55";
  public text: string = "Huntail";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
