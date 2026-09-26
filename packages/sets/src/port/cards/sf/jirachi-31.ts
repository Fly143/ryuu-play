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

export class Jirachi_31 extends PokemonCard {
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
      { name: "One Desire", cost: [], damage: "", text: "Search your deck for any 1 card. Shuffle your deck, then put that card on top of your deck." },
      { name: "Doom Desire", cost: [], damage: "", text: "Discard all Energy attached to Jirachi. The Defending Pokémon is Knocked Out at the end of your opponent's next turn." }
  ];
  public set: string = "SF";
  public name: string = "Jirachi";
  public fullName: string = "Jirachi SF 31";
  public text: string = "Jirachi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
