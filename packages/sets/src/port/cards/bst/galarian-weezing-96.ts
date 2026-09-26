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

export class GalarianWeezing_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 130;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Factory", powerType: PowerType.ABILITY, text: "Each basic Darkness Energy attached to your Pokémon that have \"Weezing\" in their name provides DarknessDarkness Energy. You can't apply more than 1 Energy Factory Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Suffocating Gas", cost: [], damage: "50", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Galarian Weezing";
  public fullName: string = "Galarian Weezing BST 96";
  public text: string = "Galarian Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
