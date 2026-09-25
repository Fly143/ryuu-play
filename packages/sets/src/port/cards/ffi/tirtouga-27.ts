import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Tirtouga_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cover Fossil";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prehistoric Call", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slam", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "FFI";
  public name: string = "Tirtouga";
  public fullName: string = "Tirtouga FFI 27";
  public text: string = "Tirtouga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toBottomOfDeck");
    }
    return state;
  }
}
