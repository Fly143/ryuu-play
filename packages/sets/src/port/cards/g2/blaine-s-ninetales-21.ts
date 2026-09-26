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
import { commonEffects } from '../../../common';

export class BlaineSNinetales_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Blaine's Vulpix";
  public hp: number = 60;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Healing Fire", powerType: PowerType.ABILITY, text: "Whenever you attach a Fire Energy card from your hand to Blaine's Ninetales, remove 1 damage counter from it, if it has any. This power stops working when Blaine's Ninetales is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burn Up", cost: [], damage: "50", text: "Flip a coin. If tails, discard all Fire Energy cards attached to Blaine's Ninetales." }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Ninetales";
  public fullName: string = "Blaine's Ninetales G2 21";
  public text: string = "Blaine's Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
