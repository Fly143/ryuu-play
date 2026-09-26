import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Illumise_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Glowing Screen", powerType: PowerType.ABILITY, text: "As long as Volbeat is in play, any damage done to Illumise by attacks from Fighting Pokémon and Darkness Pokémon is reduced by 30. You can't reduce more than 30 damage even if there is more than 1 Volbeat in play.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Chaotic Noise", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep." },
      { name: "Pester", cost: [], damage: "20+", text: "If the Defending Pokémon is affected by a Special Condition, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "SS";
  public name: string = "Illumise";
  public fullName: string = "Illumise SS 38";
  public text: string = "Illumise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:30");
    }
    return state;
  }
}
