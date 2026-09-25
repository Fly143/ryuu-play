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

export class UnownP_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "[Perform]", powerType: PowerType.ABILITY, text: "If an attack damaged Unown [P] during your opponent's last turn and Unown [P] was your Active Pokémon, Unown [P]'s Hidden Power attack does that much more damage to the Defending Pokémon. This power can be used even if Unown [P] is Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Unown [P]";
  public fullName: string = "Unown [P] N4 58";
  public text: string = "Unown [P]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
