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

export class VictreebelH30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weepinbell";
  public hp: number = 90;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fragrance Trap", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. This Power can't be used if Victreebel is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Corrosive Acid", cost: [], damage: "40", text: "Flip a coin. If heads, the Defending Pokémon is now Burned." }
  ];
  public set: string = "AQ";
  public name: string = "Victreebel";
  public fullName: string = "Victreebel AQ H30";
  public text: string = "Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
