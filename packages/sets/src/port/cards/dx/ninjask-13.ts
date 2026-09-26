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

export class Ninjask_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fast Protection", powerType: PowerType.ABILITY, text: "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Swords Dance", cost: [], damage: "", text: "During your next turn, Ninjask's Slash attack's base damage is 80." },
      { name: "Slash", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DX";
  public name: string = "Ninjask";
  public fullName: string = "Ninjask DX 13";
  public text: string = "Ninjask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
