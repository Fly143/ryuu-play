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

export class Poltchageist_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hide 'n' Sneak", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Furtive Drop", cost: [], damage: "", text: "Place 1 damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "PBL";
  public name: string = "Poltchageist";
  public fullName: string = "Poltchageist PBL 5";
  public text: string = "Poltchageist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
