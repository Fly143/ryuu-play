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

export class CameruptEx_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Numel";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Armor", powerType: PowerType.ABILITY, text: "Camerupt ex can't be Asleep or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Searing Flame", cost: [], damage: "30", text: "The Defending Pokémon is now Burned." },
      { name: "Eruption", cost: [], damage: "60+", text: "Each player discards the top card of his or her deck. This attack does 60 damage plus 20 more damage for each Energy card discarded in this way." }
  ];
  public set: string = "EM";
  public name: string = "Camerupt ex";
  public fullName: string = "Camerupt ex EM 92";
  public text: string = "Camerupt ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
