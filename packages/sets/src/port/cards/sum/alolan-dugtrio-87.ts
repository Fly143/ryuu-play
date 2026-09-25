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

export class AlolanDugtrio_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Diglett";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tangling Hair", powerType: PowerType.ABILITY, text: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dig Under", cost: [], damage: "", text: "This attack does 50 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "SUM";
  public name: string = "Alolan Dugtrio";
  public fullName: string = "Alolan Dugtrio SUM 87";
  public text: string = "Alolan Dugtrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 50);
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
