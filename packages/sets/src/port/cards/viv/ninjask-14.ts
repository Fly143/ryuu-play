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

export class Ninjask_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cast-off Shell", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Absorb", cost: [], damage: "30", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Ninjask";
  public fullName: string = "Ninjask VIV 14";
  public text: string = "Ninjask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
