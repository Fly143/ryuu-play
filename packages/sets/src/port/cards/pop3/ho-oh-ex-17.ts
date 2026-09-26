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

export class HoOhEx_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 3.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Golden Wing", powerType: PowerType.ABILITY, text: "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your Pokémon in any way you like.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rainbow Burn", cost: [], damage: "10+", text: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex." }
  ];
  public set: string = "POP3";
  public name: string = "Ho-Oh ex";
  public fullName: string = "Ho-Oh ex POP3 17";
  public text: string = "Ho-Oh ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
