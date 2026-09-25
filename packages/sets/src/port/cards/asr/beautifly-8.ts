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

export class Beautifly_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Silcoon";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stoked Straw", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw cards until you have 6 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Drain", cost: [], damage: "70", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Beautifly";
  public fullName: string = "Beautifly ASR 8";
  public text: string = "Beautifly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:6");
    }
    return state;
  }
}
