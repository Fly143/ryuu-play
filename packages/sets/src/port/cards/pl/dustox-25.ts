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

export class Dustox_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cascoon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Camouflage Pattern", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Dustox by your opponent's Pokémon that is affected by 2 or more Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Smogscreen", cost: [], damage: "20", text: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing." },
      { name: "Chemical Scale", cost: [], damage: "60", text: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, the Defending Pokémon is now Burned and Confused." }
  ];
  public set: string = "PL";
  public name: string = "Dustox";
  public fullName: string = "Dustox PL 25";
  public text: string = "Dustox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
