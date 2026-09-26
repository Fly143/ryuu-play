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

export class CastformSnowyForm_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Weather Reading", powerType: PowerType.ABILITY, text: "If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this Pokémon's attack costs.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frosty Typhoon", cost: [], damage: "120", text: "During your next turn, this Pokémon can't use Frosty Typhoon." }
  ];
  public set: string = "BST";
  public name: string = "Castform Snowy Form";
  public fullName: string = "Castform Snowy Form BST 34";
  public text: string = "Castform Snowy Form";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
