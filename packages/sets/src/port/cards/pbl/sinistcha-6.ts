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

export class Sinistcha_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poltchageist";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hide 'n' Sneak", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Matcha Spin", cost: [], damage: "", text: "If you have 6 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, place 4 damage counters on each of your opponent's Pokémon." }
  ];
  public set: string = "PBL";
  public name: string = "Sinistcha";
  public fullName: string = "Sinistcha PBL 6";
  public text: string = "Sinistcha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
