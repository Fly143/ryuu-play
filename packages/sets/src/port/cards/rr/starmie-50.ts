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

export class Starmie_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staryu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Recycle", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your discard pile for a Water Energy card, show it to your opponent, and put it into your hand. This power can't be used if Starmie is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Synchro Gain", cost: [], damage: "20", text: "If Starmie and the Defending Pokémon have the same amount of Energy attached to them, remove 4 damage counters from Starmie." },
      { name: "Powerful Spin", cost: [], damage: "40", text: "Starmie can't attack during your next turn." }
  ];
  public set: string = "RR";
  public name: string = "Starmie";
  public fullName: string = "Starmie RR 50";
  public text: string = "Starmie";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
