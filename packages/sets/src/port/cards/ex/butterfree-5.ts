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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Butterfree_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metapod";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Miraculous Powder", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may remove all Special Conditions from your Active Pokémon. This power can't be used if Butterfree is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Drain", cost: [], damage: "40", text: "Flip a coin. If heads, remove 2 damage counters from Butterfree." }
  ];
  public set: string = "EX";
  public name: string = "Butterfree";
  public fullName: string = "Butterfree EX 5";
  public text: string = "Butterfree";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "clearSpecialConditions");
    }
    return state;
  }
}
