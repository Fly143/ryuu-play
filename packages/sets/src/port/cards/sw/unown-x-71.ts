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

export class UnownX_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "X-RAY", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Unown X on your Bench, you may look at the top card of your opponent's deck and put it back on top of his or her deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "SW";
  public name: string = "Unown [X]";
  public fullName: string = "Unown [X] SW 71";
  public text: string = "Unown [X]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
