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

export class SylveonVMAX_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sylveon V";
  public hp: number = 310;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Precious Touch", cost: [], damage: "", text: "Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon." },
      { name: "Max Harmony", cost: [], damage: "70+", text: "This attack does 30 more damage for each different type of Pokémon on your Bench." }
  ];
  public set: string = "CRE";
  public name: string = "Sylveon VMAX";
  public fullName: string = "Sylveon VMAX CRE 75";
  public text: string = "Sylveon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
