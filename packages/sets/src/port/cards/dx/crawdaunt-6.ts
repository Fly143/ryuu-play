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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Crawdaunt_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corphish";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Protection", powerType: PowerType.ABILITY, text: "Any damage done to Crawdaunt by your opponent's attacks is reduced by 10 for each Darkness Energy attached to Crawdaunt (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bubblebeam", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." },
      { name: "Cross-Cut", cost: [], damage: "40+", text: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "DX";
  public name: string = "Crawdaunt";
  public fullName: string = "Crawdaunt DX 6";
  public text: string = "Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    return state;
  }
}
