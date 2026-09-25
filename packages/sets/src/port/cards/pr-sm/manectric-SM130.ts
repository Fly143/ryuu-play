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

export class ManectricSM130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electrike";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Start", powerType: PowerType.ABILITY, text: "If you go second, and if this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon or on your Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Charge", cost: [], damage: "40", text: "You may attach up to 2 basic Energy cards from your hand to 1 of your Benched Pokémon." }
  ];
  public set: string = "PR-SM";
  public name: string = "Manectric";
  public fullName: string = "Manectric PR-SM SM130";
  public text: string = "Manectric";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
