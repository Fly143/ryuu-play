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

export class Vaporeon_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blue Ray", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Vaporeon Star from your hand onto your Bench, you may remove all Special Conditions and 3 damage counters from each Active Pokémon (both yours and your opponent's).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Whirlpool", cost: [], damage: "40", text: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon." }
  ];
  public set: string = "PK";
  public name: string = "Vaporeon ★";
  public fullName: string = "Vaporeon ★ PK 102";
  public text: string = "Vaporeon ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
