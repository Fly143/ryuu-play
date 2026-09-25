import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Wigglytuff_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fluffy Fur", powerType: PowerType.ABILITY, text: "If Wigglytuff is your Active Pokémon and is damaged by an opponent's attack (even if Wigglytuff is Knocked Out), the Attacking Pokémon is now Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collect", cost: [], damage: "", text: "Draw 3 cards." },
      { name: "Pester", cost: [], damage: "30+", text: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 20 more damage." }
  ];
  public set: string = "CG";
  public name: string = "Wigglytuff";
  public fullName: string = "Wigglytuff CG 13";
  public text: string = "Wigglytuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.drawCardsAttack(this, store, state, effect).use(effect, 3);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
