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

export class LuxrayGLLVX_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Luxray GL";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bright Look", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Luxray GL LV.X from your hand onto your Active Luxray GL, you may switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flash Impact", cost: [], damage: "60", text: "Does 30 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage." }
  ];
  public set: string = "CEL";
  public name: string = "Luxray GL LV.X";
  public fullName: string = "Luxray GL LV.X CEL 109";
  public text: string = "Luxray GL LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
