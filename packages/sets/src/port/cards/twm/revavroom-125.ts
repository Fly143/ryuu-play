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

export class Revavroom_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Varoom";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rally Back", cost: [], damage: "30+", text: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage." },
      { name: "Running Charge", cost: [], damage: "100×", text: "Flip a coin until you get tails. This attack does 100 damage for each heads." }
  ];
  public set: string = "TWM";
  public name: string = "Revavroom";
  public fullName: string = "Revavroom TWM 125";
  public text: string = "Revavroom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 100);
    }
    return state;
  }
}
