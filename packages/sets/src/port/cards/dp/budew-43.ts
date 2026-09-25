import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Budew_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Roselia from your hand onto Budew (this counts as evolving Budew) and remove all damage counters from Budew.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Errand-Running", cost: [], damage: "", text: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "DP";
  public name: string = "Budew";
  public fullName: string = "Budew DP 43";
  public text: string = "Budew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
