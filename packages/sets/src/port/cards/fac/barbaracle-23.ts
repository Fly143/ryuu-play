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

export class Barbaracle_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Binacle";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hand Block", powerType: PowerType.ABILITY, text: "If you have a Stadium card in play, your opponent can't attach any Special Energy cards from his or her hand to his or her Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Claw Slash", cost: [], damage: "70", text: "" }
  ];
  public set: string = "FAC";
  public name: string = "Barbaracle";
  public fullName: string = "Barbaracle FAC 23";
  public text: string = "Barbaracle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
