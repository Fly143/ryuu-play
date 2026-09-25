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

export class Bastiodon_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shieldon";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Earthen Shield", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Metal Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Push Down", cost: [], damage: "110", text: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon." }
  ];
  public set: string = "UPR";
  public name: string = "Bastiodon";
  public fullName: string = "Bastiodon UPR 85";
  public text: string = "Bastiodon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
