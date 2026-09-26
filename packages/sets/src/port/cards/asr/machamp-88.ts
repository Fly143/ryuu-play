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

export class Machamp_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 150;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crisis Muscles", powerType: PowerType.ABILITY, text: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon gets +150 HP.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Strong-Arm Lariat", cost: [], damage: "100+", text: "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack." }
  ];
  public set: string = "ASR";
  public name: string = "Machamp";
  public fullName: string = "Machamp ASR 88";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
