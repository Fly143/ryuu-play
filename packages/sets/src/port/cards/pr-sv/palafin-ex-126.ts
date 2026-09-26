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

export class PalafinEx_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Finizen";
  public hp: number = 340;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hero's Spirit", powerType: PowerType.ABILITY, text: "Put this Pokémon into play only with the effect of Palafin's Zero to Hero Ability.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Giga Impact", cost: [], damage: "250", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PR-SV";
  public name: string = "Palafin ex";
  public fullName: string = "Palafin ex PR-SV 126";
  public text: string = "Palafin ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
