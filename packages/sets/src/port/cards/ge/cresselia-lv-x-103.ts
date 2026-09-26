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

export class CresseliaLVX_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cresselia";
  public hp: number = 100;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Full Moon Dance", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Cresselia is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moon Skip", cost: [], damage: "40", text: "If the Defending Pokémon is Knocked Out by this attack, take 1 more Prize card." }
  ];
  public set: string = "GE";
  public name: string = "Cresselia LV.X";
  public fullName: string = "Cresselia LV.X GE 103";
  public text: string = "Cresselia LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "plusPrize:1");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
