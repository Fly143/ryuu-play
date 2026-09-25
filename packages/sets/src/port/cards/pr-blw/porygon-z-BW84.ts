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

export class PorygonZBW84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Plasma Transfer", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Plasma Energy attached to 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tri Attack", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Porygon-Z";
  public fullName: string = "Porygon-Z PR-BLW BW84";
  public text: string = "Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
