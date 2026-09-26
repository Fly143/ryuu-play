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

export class Victreebel_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weepinbell";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tangling Tendrils", powerType: PowerType.ABILITY, text: "As long as Victreebel is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Acidic Drain", cost: [], damage: "30", text: "The Defending Pokémon is now Burned and Poisoned. Remove 3 damage counters from Victreebel." }
  ];
  public set: string = "TM";
  public name: string = "Victreebel";
  public fullName: string = "Victreebel TM 12";
  public text: string = "Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
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
