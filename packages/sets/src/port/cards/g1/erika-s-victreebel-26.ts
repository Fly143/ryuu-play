import {
  Effect,
  State,
  StoreLike,
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

export class ErikaSVictreebel_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Weepinbell";
  public hp: number = 80;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fragrance Trap", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon. This power can't be used if Erika's Victreebel is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Razor Leaf", cost: [], damage: "50", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Erika's Victreebel";
  public fullName: string = "Erika's Victreebel G1 26";
  public text: string = "Erika's Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
