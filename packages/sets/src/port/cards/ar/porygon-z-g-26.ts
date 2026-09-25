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

export class PorygonZG_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dowsing Code", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Porygon-Z G from your hand onto your Bench, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and shuffle them into your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Porygon-Z G";
  public fullName: string = "Porygon-Z G AR 26";
  public text: string = "Porygon-Z G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
