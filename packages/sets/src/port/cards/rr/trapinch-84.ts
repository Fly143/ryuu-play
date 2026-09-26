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

export class Trapinch_842 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gather Sand", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Trapinch is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Trapinch.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Grind", cost: [], damage: "10×", text: "Does 10 damage times the amount of Energy attached to Trapinch." }
  ];
  public set: string = "RR";
  public name: string = "Trapinch";
  public fullName: string = "Trapinch RR 84";
  public text: string = "Trapinch";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
