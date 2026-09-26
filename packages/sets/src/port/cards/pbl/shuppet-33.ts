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

export class Shuppet_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hide 'n' Sneak", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's attacks and Abilities done to this Pokémon. (Damage is not an effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hang Down", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PBL";
  public name: string = "Shuppet";
  public fullName: string = "Shuppet PBL 33";
  public text: string = "Shuppet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
