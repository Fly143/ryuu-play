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

export class MiloticEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mystic Scale", powerType: PowerType.ABILITY, text: "As long as Milotic ex is in play, each player can't play any Technical Machine cards from his or her hand. Discard all Technical Machine cards in play (both yours and your opponent's).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gentle Wrap", cost: [], damage: "30", text: "The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Reflect Energy", cost: [], damage: "70", text: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon." }
  ];
  public set: string = "EM";
  public name: string = "Milotic ex";
  public fullName: string = "Milotic ex EM 96";
  public text: string = "Milotic ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
