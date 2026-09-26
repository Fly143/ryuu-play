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

export class SalamenceLVX_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Salamence";
  public hp: number = 160;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Fall", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Salamence LV.X from your hand onto your Active Salamence, you may use this power. For each of your opponent's Pokémon that is Knocked Out by damage from Salamence's attacks this turn, take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Steam Blast", cost: [], damage: "100", text: "Discard an Energy card attached to Salamence." }
  ];
  public set: string = "AR";
  public name: string = "Salamence LV.X";
  public fullName: string = "Salamence LV.X AR 98";
  public text: string = "Salamence LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPrize:1");
    }
    return state;
  }
}
