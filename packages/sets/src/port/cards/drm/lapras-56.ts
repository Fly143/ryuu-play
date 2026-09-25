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

export class Lapras_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Go for a Swim", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back in any order.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ice Beam", cost: [], damage: "50", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "DRM";
  public name: string = "Lapras";
  public fullName: string = "Lapras DRM 56";
  public text: string = "Lapras";

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
