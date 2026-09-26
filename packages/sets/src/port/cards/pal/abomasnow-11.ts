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

export class Abomasnow_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Snover";
  public hp: number = 150;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Freezing Disaster", powerType: PowerType.ABILITY, text: "Pokémon (both yours and your opponent's) can't be healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magnum Punch", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Abomasnow";
  public fullName: string = "Abomasnow PAL 11";
  public text: string = "Abomasnow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
