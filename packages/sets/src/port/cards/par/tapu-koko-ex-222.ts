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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TapuKokoEx_222 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vengeful Shock", cost: [], damage: "30+", text: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed." },
      { name: "Extreme Current", cost: [], damage: "180", text: "Discard an Energy from this Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Tapu Koko ex";
  public fullName: string = "Tapu Koko ex PAR 222";
  public text: string = "Tapu Koko ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
