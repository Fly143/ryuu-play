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

export class Lunatone_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Marvel Eyes", powerType: PowerType.ABILITY, text: "If you have Solrock in play, prevent all effects of attacks, including damage, done to any of your Lunatone or Solrock by your opponent's Pokémon LV.X.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gravity Wave", cost: [], damage: "30", text: "Does 30 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SV";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone SV 32";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
