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
import { commonEffects } from '../../../common';

export class LatiasEx_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fellow Boost", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to your Latias, Latias ex, Latios, or Latios ex. If you do, your turn ends. This power can't be used if Latias ex is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Crush", cost: [], damage: "90", text: "If the Defending Pokémon is Knocked Out by this attack, discard 2 Fire Energy attached to Latias ex." }
  ];
  public set: string = "DF";
  public name: string = "Latias ex δ";
  public fullName: string = "Latias ex δ DF 95";
  public text: string = "Latias ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
