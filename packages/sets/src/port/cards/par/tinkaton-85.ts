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

export class Tinkaton_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tinkatuff";
  public hp: number = 130;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crushing Blow", cost: [], damage: "30", text: "Discard an Energy from your opponent's Active Pokémon." },
      { name: "Alloyed Hammer", cost: [], damage: "60+", text: "If this Pokémon has any Metal Energy attached, this attack does 120 more damage." }
  ];
  public set: string = "PAR";
  public name: string = "Tinkaton";
  public fullName: string = "Tinkaton PAR 85";
  public text: string = "Tinkaton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
