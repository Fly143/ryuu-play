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

export class Flareon_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Self-healing", powerType: PowerType.ABILITY, text: "Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Singe", cost: [], damage: "", text: "The Defending Pokémon is now Burned." },
      { name: "Burn Booster", cost: [], damage: "40+", text: "Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Fire Energy card, this attack does 40 damage plus 10 more damage." }
  ];
  public set: string = "SK";
  public name: string = "Flareon";
  public fullName: string = "Flareon SK 8";
  public text: string = "Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
