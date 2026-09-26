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

export class Weezing_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blow-Away Bomb", powerType: PowerType.ABILITY, text: "Once during your turn, when you discard this Pokémon with the effect of Roxie, you may put 1 damage counter on each of your opponent's Pokémon. (Place damage counters after the effect of Roxie.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Balloon Burst", cost: [], damage: "90", text: "Discard this Pokémon and all cards attached to it." }
  ];
  public set: string = "CEC";
  public name: string = "Weezing";
  public fullName: string = "Weezing CEC 77";
  public text: string = "Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
