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

export class Simisear_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pansear";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Monkey Trio", powerType: PowerType.ABILITY, text: "If you have Simisage, Simisear, and Simipour in play, ignore all Colorless Energy in the costs of attacks used by this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heat Tackle", cost: [], damage: "190", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "PAR";
  public name: string = "Simisear";
  public fullName: string = "Simisear PAR 21";
  public text: string = "Simisear";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
