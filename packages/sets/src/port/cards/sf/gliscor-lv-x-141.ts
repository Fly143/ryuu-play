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

export class GliscorLVX_141 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gliscor";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shoot Poison", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Gliscor LV.X from your hand onto your Active Gliscor, you may choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Night Slash", cost: [], damage: "60", text: "You may switch Gliscor with 1 of your Benched Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Gliscor LV.X";
  public fullName: string = "Gliscor LV.X SF 141";
  public text: string = "Gliscor LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "putDamageCounters:1");
    }
    return state;
  }
}
