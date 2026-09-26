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

export class Hydreigon_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 170;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon Counter", cost: [], damage: "20+", text: "This attack does 100 more damage for each Prize card your opponent took during their last turn." },
      { name: "Pitch-Black Fangs", cost: [], damage: "210", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Hydreigon";
  public fullName: string = "Hydreigon CRE 115";
  public text: string = "Hydreigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 0);
    }
    return state;
  }
}
