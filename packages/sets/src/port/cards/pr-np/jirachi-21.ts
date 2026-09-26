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

export class Jirachi_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "The Third Eye", cost: [], damage: "", text: "Discard an Energy card attached to Jirachi and draw 3 cards." },
      { name: "Psywave", cost: [], damage: "10×", text: "Does 10 damage times the amount of Energy attached to the Defending Pokémon." }
  ];
  public set: string = "PR-NP";
  public name: string = "Jirachi";
  public fullName: string = "Jirachi PR-NP 21";
  public text: string = "Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesEnergyDefending:10");
    }
    return state;
  }
}
