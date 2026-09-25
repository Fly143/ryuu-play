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

export class PorygonZ_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Stop", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Digital Reboot", cost: [], damage: "", text: "Devolve as many of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand." },
      { name: "Dazzle Blast", cost: [], damage: "50", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "BKT";
  public name: string = "Porygon-Z";
  public fullName: string = "Porygon-Z BKT 67";
  public text: string = "Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "devolve");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
