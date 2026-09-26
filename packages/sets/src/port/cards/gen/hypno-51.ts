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

export class Hypno_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drowzee";
  public hp: number = 90;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Goodnight, Babies", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may leave both Active Pokémon Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Zen Headbutt", cost: [], damage: "50", text: "" }
  ];
  public set: string = "GEN";
  public name: string = "Hypno";
  public fullName: string = "Hypno GEN 51";
  public text: string = "Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
