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

export class Azurill_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill), and remove all damage counters from Azurill.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Jump Catch", cost: [], damage: "", text: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "SS";
  public name: string = "Azurill";
  public fullName: string = "Azurill SS 31";
  public text: string = "Azurill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
