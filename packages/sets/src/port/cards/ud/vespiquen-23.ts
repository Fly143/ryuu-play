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

export class Vespiquen_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Defense Sign", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Grass Pokémon by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Wind", cost: [], damage: "60", text: "During your next turn, Vespiquen's Retreat Cost is 0." }
  ];
  public set: string = "UD";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen UD 23";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
