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

export class Lunatone_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Moonglow", powerType: PowerType.ABILITY, text: "The Retreat Cost for each Solrock you have in play is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Foresight", cost: [], damage: "", text: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order." },
      { name: "Target Beam", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Solrock you have in play." }
  ];
  public set: string = "DX";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone DX 36";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
