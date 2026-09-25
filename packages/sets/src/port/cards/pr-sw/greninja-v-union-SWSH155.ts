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

export class GreninjaVUNIONSWSH155 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 300;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ninja Body", powerType: PowerType.ABILITY, text: "Whenever your opponent plays an Item card from their hand, prevent all effects of that card done to this Pokémon.", useWhenInPlay: true },
      { name: "Antidote Jutsu", powerType: PowerType.ABILITY, text: "This Pokémon can't be Poisoned.", useWhenInPlay: true },
      { name: "Feel the Way", powerType: PowerType.ABILITY, text: "Once during your turn, you may have your opponent reveal their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Union Gain", cost: [], damage: "", text: "Attach up to 2 Water Energy cards from your discard pile to this Pokémon." },
      { name: "Aqua Edge", cost: [], damage: "130", text: "" },
      { name: "Twister Shuriken", cost: [], damage: "", text: "This attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Waterfall Blind", cost: [], damage: "180", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "PR-SW";
  public name: string = "Greninja V-UNION";
  public fullName: string = "Greninja V-UNION PR-SW SWSH155";
  public text: string = "Greninja V-UNION";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 100);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[3]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsMarker");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[1]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
