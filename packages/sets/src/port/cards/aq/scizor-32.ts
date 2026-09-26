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

export class Scizor_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scyther";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Resistance", powerType: PowerType.ABILITY, text: "Scizor can't be Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Snatch", cost: [], damage: "20", text: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and switch the Defending Pokémon with it." },
      { name: "Heavy Metal", cost: [], damage: "30+", text: "Flip a number of coins equal to the amount of Metal Energy attached to Scizor. This attack does 30 damage plus 20 more damage for each heads." }
  ];
  public set: string = "AQ";
  public name: string = "Scizor";
  public fullName: string = "Scizor AQ 32";
  public text: string = "Scizor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
