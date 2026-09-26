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

export class DrapionVSTAR_200 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drapion V";
  public hp: number = 270;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hazard Star", powerType: PowerType.ABILITY, text: "During your turn, you may make your opponent's Active Pokémon Paralyzed and Poisoned. During Pokémon Checkup, put 3 damage counters on that Pokémon instead of 1. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Big Bang Arm", cost: [], damage: "250-", text: "This attack does 10 less damage for each damage counter on this Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Drapion VSTAR";
  public fullName: string = "Drapion VSTAR ASR 200";
  public text: string = "Drapion VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
