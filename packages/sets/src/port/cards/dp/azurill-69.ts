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

export class Azurill_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts a evolving Azurill) and remove all damage counters from Azurill.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Delivery", cost: [], damage: "", text: "Put any 1 card from your discard pile into your hand." }
  ];
  public set: string = "DP";
  public name: string = "Azurill";
  public fullName: string = "Azurill DP 69";
  public text: string = "Azurill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscard */ state;
    }
    return state;
  }
}
