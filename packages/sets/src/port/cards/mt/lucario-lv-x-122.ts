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

export class LucarioLVX_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lucario";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you put Lucario LV.X from your hand onto your Active Lucario, you may use this power. Prevent all effects of an attack, including damage, done to Lucario during your opponent's next turn. (If Lucario is no longer your Active Pokémon, this effect ends.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Close Combat", cost: [], damage: "80", text: "During your opponent's next turn, any damage done to Lucario by attacks is increased by 30 (after applying Weakness and Resistance)." }
  ];
  public set: string = "MT";
  public name: string = "Lucario LV.X";
  public fullName: string = "Lucario LV.X MT 122";
  public text: string = "Lucario LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
