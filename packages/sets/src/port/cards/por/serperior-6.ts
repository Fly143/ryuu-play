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

export class Serperior_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Servine";
  public hp: number = 160;
    public height?: number = 3.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regal Command", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Pokémon in play." },
      { name: "Solar Coiling", cost: [], damage: "100+", text: "If Rosa's Encouragement is in your discard pile, this attack does 150 more damage." }
  ];
  public set: string = "POR";
  public name: string = "Serperior";
  public fullName: string = "Serperior POR 6";
  public text: string = "Serperior";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 150, 1);
    }
    return state;
  }
}
