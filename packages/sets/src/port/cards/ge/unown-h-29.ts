import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class UnownH_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "HEAL", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Unown H, Unown E, Unown A, and Unown L on your Bench, you may remove all Special Conditions from 1 of your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "30", text: "Discard a card from your hand. (If you can't discard a card from your hand, this attack does nothing.)" }
  ];
  public set: string = "GE";
  public name: string = "Unown [H]";
  public fullName: string = "Unown [H] GE 29";
  public text: string = "Unown [H]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
