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

export class LucarioGL_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Boundary Aura", powerType: PowerType.ABILITY, text: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Combo Throw", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "RR";
  public name: string = "Lucario GL";
  public fullName: string = "Lucario GL RR 8";
  public text: string = "Lucario GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
