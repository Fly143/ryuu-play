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

export class Bronzong_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bronzor";
  public hp: number = 90;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Alloy", powerType: PowerType.ABILITY, text: "As long as Bronzong is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Powers between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pain Amplifier", cost: [], damage: "", text: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it." },
      { name: "Coating", cost: [], damage: "60", text: "During your opponent's next turn, any damage done to Bronzong by attacks is reduced by 20 (after applying Weakness and Resistance)." }
  ];
  public set: string = "LA";
  public name: string = "Bronzong";
  public fullName: string = "Bronzong LA 16";
  public text: string = "Bronzong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
