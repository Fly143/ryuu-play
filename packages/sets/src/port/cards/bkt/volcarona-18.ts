import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Volcarona_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvesta";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Stop", powerType: PowerType.ABILITY, text: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burning Scales", cost: [], damage: "20+", text: "Flip 2 coins. This attack does 20 more damage for each heads." },
      { name: "Wind Wheel", cost: [], damage: "80", text: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "Volcarona";
  public fullName: string = "Volcarona BKT 18";
  public text: string = "Volcarona";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
