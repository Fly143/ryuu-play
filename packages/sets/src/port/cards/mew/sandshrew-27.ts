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

export class Sandshrew_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Screen", powerType: PowerType.ABILITY, text: "Trainer cards in your opponent's discard pile can't be put into their deck by an effect of your opponent's Item or Supporter cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Sandshrew";
  public fullName: string = "Sandshrew MEW 27";
  public text: string = "Sandshrew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
