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

export class Sunflora_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sunkern";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dazzle Dance", cost: [], damage: "", text: "Each Defending Pokémon is now Confused." },
      { name: "Green Blast", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon." }
  ];
  public set: string = "UF";
  public name: string = "Sunflora";
  public fullName: string = "Sunflora UF 16";
  public text: string = "Sunflora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
