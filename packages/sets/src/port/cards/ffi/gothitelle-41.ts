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

export class Gothitelle_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothorita";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Teleport Room", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, put a Stadium card with a different name from your discard pile into play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psy Report", cost: [], damage: "60", text: "Your opponent reveals his or her hand." }
  ];
  public set: string = "FFI";
  public name: string = "Gothitelle";
  public fullName: string = "Gothitelle FFI 41";
  public text: string = "Gothitelle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
