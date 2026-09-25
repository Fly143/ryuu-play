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

export class HoothootTG12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stand Sentry", powerType: PowerType.ABILITY, text: "Basic Energy attached to your Benched Pokémon can't be discarded by an effect of your opponent's Item or Supporter cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flap", cost: [], damage: "20", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Hoothoot";
  public fullName: string = "Hoothoot ASR TG12";
  public text: string = "Hoothoot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
