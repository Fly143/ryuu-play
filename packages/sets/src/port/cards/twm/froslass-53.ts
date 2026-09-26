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

export class Froslass_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snorunt";
  public hp: number = 90;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Freezing Shroud", powerType: PowerType.ABILITY, text: "During Pokémon Checkup, put 1 damage counter on each Pokémon that has an Ability (both yours and your opponent's), except any Froslass.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frost Smash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Froslass";
  public fullName: string = "Froslass TWM 53";
  public text: string = "Froslass";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
