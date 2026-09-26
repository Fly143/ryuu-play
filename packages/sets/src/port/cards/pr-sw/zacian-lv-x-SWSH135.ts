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

export class ZacianLVXSWSH135 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zacian";
  public hp: number = 160;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bladed Armament", powerType: PowerType.ABILITY, text: "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Brave Blade", cost: [], damage: "240", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PR-SW";
  public name: string = "Zacian LV.X";
  public fullName: string = "Zacian LV.X PR-SW SWSH135";
  public text: string = "Zacian LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
