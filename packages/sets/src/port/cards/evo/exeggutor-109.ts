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

export class Exeggutor_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "タマタマ[Exeggcute]";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "ふみつけ[Stomp]", cost: [], damage: "20+", text: "コインを1回投げオモテなら、10ダメージを追加。 Flip a coin. If heads, this attack does 10 more damage." }
  ];
  public set: string = "EVO";
  public name: string = "ナッシー[Exeggutor]";
  public fullName: string = "ナッシー[Exeggutor] EVO 109";
  public text: string = "ナッシー[Exeggutor]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 1);
    }
    return state;
  }
}
