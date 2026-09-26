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

export class Infernape_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Monferno";
  public hp: number = 150;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Infernal Vortex", cost: [], damage: "80×", text: "Reveal the top 5 cards of your deck. This attack does 80 damage for each Energy card you find there. Then, discard those Energy cards and shuffle the other cards back into your deck." },
      { name: "Burning Kick", cost: [], damage: "160", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "FST";
  public name: string = "Infernape";
  public fullName: string = "Infernape FST 26";
  public text: string = "Infernape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
