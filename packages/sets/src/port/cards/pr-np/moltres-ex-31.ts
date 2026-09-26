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

export class MoltresEx_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Synchronized Lift", powerType: PowerType.ABILITY, text: "As long as you have Articuno ex and Zapdos ex in play, the Retreat Cost for Moltres ex is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Gift", cost: [], damage: "10", text: "You may move a Fire Energy card attached to Moltres ex to 1 of your Pokémon." },
      { name: "Scorching Wing", cost: [], damage: "90", text: "Discard all Fire Energy attached to Moltres ex." }
  ];
  public set: string = "PR-NP";
  public name: string = "Moltres ex";
  public fullName: string = "Moltres ex PR-NP 31";
  public text: string = "Moltres ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
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
