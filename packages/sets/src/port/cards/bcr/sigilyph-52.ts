import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Sigilyph_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Safeguard", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psychic", cost: [], damage: "50+", text: "Does 10 more damage for each Energy attached to the Defending Pokémon." }
  ];
  public set: string = "BCR";
  public name: string = "Sigilyph";
  public fullName: string = "Sigilyph BCR 52";
  public text: string = "Sigilyph";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyDefending:10");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
