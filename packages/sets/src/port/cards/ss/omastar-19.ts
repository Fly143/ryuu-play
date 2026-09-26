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

export class Omastar_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Omanyte";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pull Down", cost: [], damage: "", text: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand." },
      { name: "Hydrocannon", cost: [], damage: "30+", text: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way." }
  ];
  public set: string = "SS";
  public name: string = "Omastar";
  public fullName: string = "Omastar SS 19";
  public text: string = "Omastar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
