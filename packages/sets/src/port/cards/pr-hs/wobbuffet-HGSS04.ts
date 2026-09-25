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

export class WobbuffetHGSS04 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tenacious Bind", powerType: PowerType.ABILITY, text: "As long as Wobbuffet is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Trip Over", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage." }
  ];
  public set: string = "PR-HS";
  public name: string = "Wobbuffet";
  public fullName: string = "Wobbuffet PR-HS HGSS04";
  public text: string = "Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
