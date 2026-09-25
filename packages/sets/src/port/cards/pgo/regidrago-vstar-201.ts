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

export class RegidragoVSTAR_201 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Regidrago V";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legacy Star", powerType: PowerType.ABILITY, text: "During your turn, you may discard the top 7 cards of your deck. Then, put up to 2 cards from your discard pile into your hand. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Apex Dragon", cost: [], damage: "", text: "Choose an attack from a Dragon Pokémon in your discard pile and use it as this attack." }
  ];
  public set: string = "PGO";
  public name: string = "Regidrago VSTAR";
  public fullName: string = "Regidrago VSTAR PGO 201";
  public text: string = "Regidrago VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
