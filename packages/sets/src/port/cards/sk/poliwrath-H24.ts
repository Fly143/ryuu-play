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

export class PoliwrathH24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Strange Spiral", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Poliwrath is your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Punch", cost: [], damage: "40+", text: "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads." }
  ];
  public set: string = "SK";
  public name: string = "Poliwrath";
  public fullName: string = "Poliwrath SK H24";
  public text: string = "Poliwrath";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "discardFromHand:1");
    }
    return state;
  }
}
