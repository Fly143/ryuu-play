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

export class Vanilluxe_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vanillish";
  public hp: number = 150;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frigid Room", powerType: PowerType.ABILITY, text: "Your opponent's Pokémon that have 40 HP or less remaining can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Icicle Missile", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Vanilluxe";
  public fullName: string = "Vanilluxe PAR 45";
  public text: string = "Vanilluxe";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
