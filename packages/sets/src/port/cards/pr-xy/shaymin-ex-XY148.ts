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

export class ShayminEXXY148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aroma of Gratitude", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may heal 20 damage from each of your Benched Basic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Floral Gain", cost: [], damage: "60", text: "Heal 20 damage and remove all Special Conditions from this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Shaymin-EX";
  public fullName: string = "Shaymin-EX PR-XY XY148";
  public text: string = "Shaymin-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.clearSpecialConditions(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
