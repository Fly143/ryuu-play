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

export class OrbeetleVMAX_186 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Orbeetle V";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Eerie Beam", powerType: PowerType.ABILITY, text: "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "G-Max Wave", cost: [], damage: "50+", text: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Orbeetle VMAX";
  public fullName: string = "Orbeetle VMAX VIV 186";
  public text: string = "Orbeetle VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 0);
    }
    return state;
  }
}
