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

export class Infernape_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Monferno";
  public hp: number = 110;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rushing Flames", cost: [], damage: "80×", text: "Discard as many Fire Energy cards as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads." },
      { name: "Rage", cost: [], damage: "30+", text: "Does 30 damage plus 10 more damage for each damage counter on Infernape." }
  ];
  public set: string = "PL";
  public name: string = "Infernape";
  public fullName: string = "Infernape PL 31";
  public text: string = "Infernape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
