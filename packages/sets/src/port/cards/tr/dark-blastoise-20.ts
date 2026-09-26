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

export class DarkBlastoise_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Wartortle";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hydrocannon", cost: [], damage: "30+", text: "Does 30 damage plus 20 more damage for each Water Energy attached to Dark Blastoise but not used to pay for this attack. You can't add more than 40 damage in this way." },
      { name: "Rocket Tackle", cost: [], damage: "40", text: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)" }
  ];
  public set: string = "TR";
  public name: string = "Dark Blastoise";
  public fullName: string = "Dark Blastoise TR 20";
  public text: string = "Dark Blastoise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
