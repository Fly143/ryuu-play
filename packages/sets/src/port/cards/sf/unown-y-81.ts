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

export class UnownY_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "YAWN", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown Y is on your Bench, you may remove 1 damage counter from 1 of your Active Unown and that Unown is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "", text: "Search your deck for up to 2 Trainer cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "SF";
  public name: string = "Unown [Y]";
  public fullName: string = "Unown [Y] SF 81";
  public text: string = "Unown [Y]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
