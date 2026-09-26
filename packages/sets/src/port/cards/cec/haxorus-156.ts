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

export class Haxorus_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fraxure";
  public hp: number = 150;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Grind Up", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, attach up to 3 in any combination of Fire and Metal Energy cards from your hand to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Powerful Axe", cost: [], damage: "10+", text: "This attack does 40 more damage times the amount of basic Energy attached to this Pokémon." }
  ];
  public set: string = "CEC";
  public name: string = "Haxorus";
  public fullName: string = "Haxorus CEC 156";
  public text: string = "Haxorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    return state;
  }
}
