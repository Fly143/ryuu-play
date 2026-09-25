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

export class CentiskorchVMAXSV109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Centiskorch V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "G-Max Centiferno", cost: [], damage: "40+", text: "This attack does 40 more damage for each Fire Energy attached to this Pokémon. If you did any damage with this attack, you may attach a Fire Energy card from your discard pile to this Pokémon." }
  ];
  public set: string = "SHF";
  public name: string = "Centiskorch VMAX";
  public fullName: string = "Centiskorch VMAX SHF SV109";
  public text: string = "Centiskorch VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
