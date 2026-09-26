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

export class Absol_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Baleful Wind", cost: [], damage: "", text: "Choose a card from your opponent's hand without looking and discard it. If you discarded a Trainer, Supporter, or Stadium card, choose 1 more card from your opponent's hand without looking and discard it." },
      { name: "Raid", cost: [], damage: "10", text: "If you played Absol from your hand during this turn, this attack's base damage is 40 instead of 10." }
  ];
  public set: string = "SW";
  public name: string = "Absol";
  public fullName: string = "Absol SW 21";
  public text: string = "Absol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
