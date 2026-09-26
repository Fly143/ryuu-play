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

export class Ludicolo_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Happy Dance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. You can't use more than 1 Happy Dance Poké-Power each turn. This power can't be used if Ludicolo is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Punch", cost: [], damage: "40+", text: "Flip a coin for each Water Energy attached to Ludicolo. This attack does 40 damage plus 20 more damage for each heads." }
  ];
  public set: string = "DX";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo DX 19";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "healEachPokemon:10");
    }
    return state;
  }
}
