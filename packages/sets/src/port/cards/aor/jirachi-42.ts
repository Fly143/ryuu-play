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

export class Jirachi_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Diminutive Desire", cost: [], damage: "", text: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck." },
      { name: "Doom Desire", cost: [], damage: "", text: "Discard all Energy attached to this Pokémon. The Defending Pokémon is Knocked Out at the end of your opponent's next turn." }
  ];
  public set: string = "AOR";
  public name: string = "Jirachi";
  public fullName: string = "Jirachi AOR 42";
  public text: string = "Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
