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

export class DragapultSV062 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drakloak";
  public hp: number = 150;
    public height?: number = 3.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Infiltrator", powerType: PowerType.ABILITY, text: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Phantom Force", cost: [], damage: "120", text: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like." }
  ];
  public set: string = "SHF";
  public name: string = "Dragapult";
  public fullName: string = "Dragapult SHF SV062";
  public text: string = "Dragapult";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
