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

export class GengarEx_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 150;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poltergeist", cost: [], damage: "40+", text: "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand." },
      { name: "Prize Count", cost: [], damage: "60+", text: "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage." }
  ];
  public set: string = "RG";
  public name: string = "Gengar ex";
  public fullName: string = "Gengar ex RG 108";
  public text: string = "Gengar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
