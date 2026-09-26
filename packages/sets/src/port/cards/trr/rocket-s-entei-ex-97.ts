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

export class RocketSEnteiEx_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Condition", powerType: PowerType.ABILITY, text: "As long as Rocket's Entei ex has any Darkness Energy attached to it, Rocket's Entei ex has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Link", cost: [], damage: "10", text: "Search your discard pile for an Energy card and attach it to Rocket's Entei ex." },
      { name: "Volcanic Ash", cost: [], damage: "", text: "Discard 2 Energy attached to Rocket's Entei ex and then choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Entei ex";
  public fullName: string = "Rocket's Entei ex TRR 97";
  public text: string = "Rocket's Entei ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noWeakness");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noWeakness");
    }
    return state;
  }
}
