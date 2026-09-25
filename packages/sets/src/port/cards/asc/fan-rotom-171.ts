import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class FanRotom_171 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fan Call", powerType: PowerType.ABILITY, text: "Once during your first turn, you may search your deck for up to 3 Colorless Pokémon with 100 HP or less, reveal them, and put them into your hand. Then, shuffle your deck. You can't use more than 1 Fan Call Ability during your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Assault Landing", cost: [], damage: "70", text: "If there is no Stadium in play, this attack does nothing." }
  ];
  public set: string = "ASC";
  public name: string = "Fan Rotom";
  public fullName: string = "Fan Rotom ASC 171";
  public text: string = "Fan Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
