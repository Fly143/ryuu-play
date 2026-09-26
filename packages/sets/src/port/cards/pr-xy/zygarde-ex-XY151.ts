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

export class ZygardeEXXY151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Land's Pulse", cost: [], damage: "20+", text: "If there is any Stadium card in play, this attack does 20 more damage." },
      { name: "Cell Storm", cost: [], damage: "60", text: "Heal 30 damage from this Pokémon." },
      { name: "Land's Wrath", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PR-XY";
  public name: string = "Zygarde-EX";
  public fullName: string = "Zygarde-EX PR-XY XY151";
  public text: string = "Zygarde-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
