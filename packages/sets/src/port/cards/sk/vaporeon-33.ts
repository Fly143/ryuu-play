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

export class Vaporeon_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Self-healing", powerType: PowerType.ABILITY, text: "Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnosplash", cost: [], damage: "10", text: "The Defending Pokémon is now Asleep." },
      { name: "Aqua Trick", cost: [], damage: "40", text: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect." }
  ];
  public set: string = "SK";
  public name: string = "Vaporeon";
  public fullName: string = "Vaporeon SK 33";
  public text: string = "Vaporeon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
