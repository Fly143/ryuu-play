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

export class Charizard_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burn Brightly", powerType: PowerType.ABILITY, text: "Each basic Fire Energy attached to your Pokémon provides FireFire Energy. You can't apply more than 1 Burn Brightly Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flare Blitz", cost: [], damage: "170", text: "Discard all Fire Energy from this Pokémon." }
  ];
  public set: string = "PGO";
  public name: string = "Charizard";
  public fullName: string = "Charizard PGO 10";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
