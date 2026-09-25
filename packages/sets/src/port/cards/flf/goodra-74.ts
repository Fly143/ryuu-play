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

export class Goodra_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sliggoo";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gooey Regeneration", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may discard an Energy attached to this Pokémon. If you do, heal 60 damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Heavy Whip", cost: [], damage: "80+", text: "Flip a coin. If heads, this attack does 40 more damage." }
  ];
  public set: string = "FLF";
  public name: string = "Goodra";
  public fullName: string = "Goodra FLF 74";
  public text: string = "Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
