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

export class Bonsly_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Sudowoodo from your hand onto Bonsly (this counts as evolving Bonsly) and remove all damage counters from Bonsly.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fake Tears", cost: [], damage: "", text: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn, and any damage done to Bonsly by attacks is reduced by 30 (after applying Weakness and Resistance)." }
  ];
  public set: string = "DP";
  public name: string = "Bonsly";
  public fullName: string = "Bonsly DP 71";
  public text: string = "Bonsly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
