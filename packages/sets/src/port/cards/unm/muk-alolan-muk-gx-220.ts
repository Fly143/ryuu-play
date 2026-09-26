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

export class MukAlolanMukGX_220 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Severe Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns." },
      { name: "Poison Absorption", cost: [], damage: "120", text: "If your opponent's Active Pokémon is Poisoned, heal 100 damage from this Pokémon." },
      { name: "Nasty Goo Mix-GX", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Muk & Alolan Muk-GX";
  public fullName: string = "Muk & Alolan Muk-GX UNM 220";
  public text: string = "Muk & Alolan Muk-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 100);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
