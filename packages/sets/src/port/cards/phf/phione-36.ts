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

export class Phione_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pull Out", cost: [], damage: "", text: "Put a card from your discard pile on top of your deck." },
      { name: "Aqua Boomerang", cost: [], damage: "20", text: "Return this Pokémon and all cards attached to it to your hand." }
  ];
  public set: string = "PHF";
  public name: string = "Phione";
  public fullName: string = "Phione PHF 36";
  public text: string = "Phione";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
