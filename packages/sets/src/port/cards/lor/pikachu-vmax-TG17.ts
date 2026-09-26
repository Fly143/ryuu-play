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

export class PikachuVMAXTG17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu V";
  public hp: number = 310;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "G-Max Volt Tackle", cost: [], damage: "120+", text: "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage." }
  ];
  public set: string = "LOR";
  public name: string = "Pikachu VMAX";
  public fullName: string = "Pikachu VMAX LOR TG17";
  public text: string = "Pikachu VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 150, 1);
    }
    return state;
  }
}
