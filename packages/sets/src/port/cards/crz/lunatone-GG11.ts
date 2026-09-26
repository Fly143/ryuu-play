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

export class LunatoneGG11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cycle Draw", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 3 cards." },
      { name: "Moon Kinesis", cost: [], damage: "30+", text: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon." }
  ];
  public set: string = "CRZ";
  public name: string = "Lunatone";
  public fullName: string = "Lunatone CRZ GG11";
  public text: string = "Lunatone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
