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

export class Venomoth_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venonat";
  public hp: number = 80;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dangerous Scales", powerType: PowerType.ABILITY, text: "If Venomoth is your Active Pokémon and is damaged by an opponent's attack (even if Venomoth is Knocked Out), the Attacking Pokémon is now Asleep and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Disturbance Dive", cost: [], damage: "50", text: "Prevent all effects of an attack, excluding damage, done to Venomoth during your opponent's next turn." }
  ];
  public set: string = "SW";
  public name: string = "Venomoth";
  public fullName: string = "Venomoth SW 73";
  public text: string = "Venomoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "poisonPoint");
    }
    return state;
  }
}
