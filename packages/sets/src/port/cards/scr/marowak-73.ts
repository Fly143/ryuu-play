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

export class Marowak_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growl", cost: [], damage: "", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 40 less damage (before applying Weakness and Resistance)." },
      { name: "Bone Vengeance", cost: [], damage: "60+", text: "If any of your Benched Cubone have any damage counters on them, this attack does 120 more damage." }
  ];
  public set: string = "SCR";
  public name: string = "Marowak";
  public fullName: string = "Marowak SCR 73";
  public text: string = "Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
